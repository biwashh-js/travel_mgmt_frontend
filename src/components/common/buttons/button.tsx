import React from "react";

interface IProps {
  label: string;
  type?: "submit" | "reset" | "button";
  variant?: "fill" | "outline";
  disabled?:boolean
}

const Button: React.FC<IProps> = ({
  label,
  type = "button",
  variant = "fill",
  disabled
}) => {
  const baseStyles =
    "w-full h-[40px] mt-1 rounded-md cursor-pointer font-semibold transition-all duration-300";

  const variantStyles =
    variant === "fill"
      ? "bg-blue-500 text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
      : "border border-blue-500 text-blue-500 hover:border-blue-800 hover:text-blue-900";

  return (
    <button type={type} 
    disabled={disabled}
    className={`${baseStyles} ${variantStyles}`}>
      {label}
    </button>
  );
};

export default Button;
