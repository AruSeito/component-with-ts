import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { InputHTMLAttributes, ReactElement } from "react";
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
