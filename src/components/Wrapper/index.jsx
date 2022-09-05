import { Container } from "./styles";

export function Wrapper({ children }) {
  return <Container className="wrapper">{children}</Container>;
}
