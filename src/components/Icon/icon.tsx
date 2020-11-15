import React from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export interface IconProps extends FontAwesomeIconProps {}

const Icon: React.FC<IconProps> = (props) => {
  const { className, ...restProps } = props;
  const classes = classNames("icon", className);

  return <FontAwesomeIcon className={classes} {...restProps} />;
};

export default Icon;
