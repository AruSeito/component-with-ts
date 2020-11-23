import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { ChangeEvent, InputHTMLAttributes, ReactElement } from "react";
import classNames from "classnames";
import Icon from "../Icon/icon";

enum InputSize {
  lg = "lg",
  sm = "sm",
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = (props) => {
  const { disabled, size, icon, prepend, append, ...resProps } = props;
  const classes = classNames("input", {
    "is-diasbled": disabled,
    [`input-${size}`]: size,
    "input-group": prepend || append,
    "input-group-prepand": !!prepend,
    "input-group-append": !!append,
  });

  const fixValue = (value: any) => {
    if (typeof value === "undefined" || value === null) {
      return "";
    }
    return value;
  };
  if ("value" in resProps) {
    delete resProps.defaultValue;
    resProps.value = fixValue(props.value);
  }
  return (
    <div className={classes} style={props.style}>
      {prepend && <div className="input-group-prepend">{prepend}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="input-inner" disabled={disabled} {...resProps} />
      {append && <div className="input-group-append">{append}</div>}
    </div>
  );
};
