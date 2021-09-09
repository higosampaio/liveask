import { ButtonProps } from "../../types/ButtonProps";
import { Container } from "./styles";

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <Container
      className={`button ${isOutlined ? "outlined" : ""}`}
      {...props}
    />
  );
}
