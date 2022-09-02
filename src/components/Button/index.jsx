import { Container } from "./styles";

export function Button({ icon: Icon, title, disabled = false }) {
  return (
    <Container type="button" disabled={disabled}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
