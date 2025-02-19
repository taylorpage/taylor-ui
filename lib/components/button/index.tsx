import React, { useRef, useEffect } from "react";
import formatClasses from "../../utils/formatClasses";

interface ButtonProps {
  autoFocus?: boolean;
  className?: string;
  design?: "primary" | "secondary" | "text" | undefined;
  disabled?: boolean;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;
  id?: string;
  label?: string;
  name?: string;
  onClick?: Function;
  popoverTarget?: string;
  popoverTargetAction?: "toggle" | "show" | "hide" | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  value?: string;
}

const Button = function ({
  autoFocus,
  className,
  design = "primary",
  disabled,
  form,
  formAction,
  formEncType,
  formMethod,
  formNoValidate,
  formTarget,
  id,
  label,
  name,
  onClick,
  popoverTarget,
  popoverTargetAction,
  type,
  value,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (autoFocus && buttonRef.current) {
      buttonRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <button
      autoFocus={autoFocus}
      className={formatClasses(className, design)}
      disabled={disabled}
      form={form}
      formAction={formAction}
      formEncType={formEncType}
      formMethod={formMethod}
      formNoValidate={formNoValidate}
      formTarget={formTarget}
      id={id}
      name={name}
      onClick={(_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        onClick && onClick.call(Button)
      }
      popoverTarget={popoverTarget}
      popoverTargetAction={popoverTargetAction}
      ref={buttonRef}
      type={type}
      value={value}
    >
      {label}
    </button>
  );
};

export default Button;
