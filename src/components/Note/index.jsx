import { Container } from "./styles";

import { Rating } from "../Rating";

export function Note({ data }) {
  return (
    <Container>
      <h3>{data.title}</h3>
      <Rating grade={data.rating} isBigSize={false} />
    </Container>
  );
}
