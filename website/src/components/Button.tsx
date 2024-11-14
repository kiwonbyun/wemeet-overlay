import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: "default" | "primary";
}
function Button({ buttonType = "default", ...props }: ButtonProps) {
  const isPrimary = buttonType === "primary";
  return (
    <button
      style={{
        backgroundColor: isPrimary ? "#434753" : "white",
        border: "none",
        padding: "10px 16px",
        borderRadius: 6,
        color: isPrimary ? "white" : "#50545F",
        cursor: "pointer",
        boxShadow:
          "0 0 0 1px rgba(0,0,0,.06),0 1px 0 0 rgba(0,0,0,.08),0 2px 2px 0 rgba(0,0,0,.04),0 3px 3px 0 rgba(0,0,0,.02),0 4px 4px 0 rgba(0,0,0,.01)",
      }}
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
