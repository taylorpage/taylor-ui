interface ButtonProps {
  label?: string;
}

const Button = function ({ label }: ButtonProps) {
  return <button>{label}</button>;
};

export default Button;
