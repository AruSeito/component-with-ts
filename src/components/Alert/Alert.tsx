import React, { useState } from "react";
import classNames from "classnames";

export type AlertType = "success" | "info" | "danger" | "warning";

interface BaseAlertProps {
  className?: string;
  type?: AlertType;
  message: string;
  description?: string;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const { message, description, className, type } = props;
  const [visible, setVisbile] = useState(true);
  const classes = classNames("alert", className, {
    [`alert-${type}`]: type,
    "not-display": !visible,
  });
  const handleClick = () => {
    setVisbile(!visible);
  };
  return (
    <div className={classes}>
      <div className="message">
        <span>{message}</span>
        <span onClick={handleClick}>关闭</span>
      </div>
      {description && <span>{description}</span>}
    </div>
  );
};

Alert.defaultProps = {
  type: "success",
};

export default Alert;
