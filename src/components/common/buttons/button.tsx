import React from "react";

interface IProps {
  label: string;
  type?: "submit" | "reset" | "button";
  variant?: "fill" | "outline";
}

const Button: React.FC<IProps> = ({
  label,
  type = "button",
  variant = "fill",
}) => {
  const baseStyles =
    "w-full h-[40px] mt-8 rounded-md cursor-pointer font-semibold transition-all duration-300";

  const variantStyles =
    variant === "fill"
      ? "bg-blue-500 text-white hover:bg-blue-900"
      : "border border-blue-500 text-blue-500 hover:border-blue-900 hover:text-blue-900";

  return (
    <button type={type} className={`${baseStyles} ${variantStyles}`}>
      {label}
    </button>
  );
};

export default Button;
