import { Container } from "./styles";

export function Input({ icon: Icon, type = "text", className, ...rest }) {
  return (
    <Container className={className}>
      {Icon && <Icon />}
      <input type={type} {...rest} />
    </Container>
  );
}
