import { Container } from "./styles";

export function Button({
  icon: Icon,
  title,
  highlighted = true,
  disabled = false,
}) {
  return (
    <Container type="button" disabled={disabled} highlighted={highlighted}>
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
