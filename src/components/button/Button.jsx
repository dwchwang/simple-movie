import React from "react";

const Button = ({
  onClick,
  type = "button",
  bgColor = "primary",
  className,
  children,
  full = false,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-3 px-6  rounded-lg capitalize ${
        full ? "w-full" : ""
      } mt-auto ${bgClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
