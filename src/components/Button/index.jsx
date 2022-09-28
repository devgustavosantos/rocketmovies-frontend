import { Container } from "./styles";

export function Button({
  icon: Icon,
  title,
  highlighted = true,
  disabled = false,
  onClick,
}) {
  return (
    <Container
      type="button"
      disabled={disabled}
      highlighted={highlighted}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {title}
    </Container>
  );
}
