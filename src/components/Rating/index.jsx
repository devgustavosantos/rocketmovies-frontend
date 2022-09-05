import { Container } from "./styles";

import { VscStarFull, VscStarEmpty } from "react-icons/vsc";

export function Rating({ grade, isBigSize }) {
  let stars = [];
  for (let cont = 1; cont <= 5; cont++) {
    if (cont <= grade) {
      stars.push(<VscStarFull key={cont} />);
    } else {
      stars.push(<VscStarEmpty key={cont} />);
    }
  }

  return <Container isBigSize={isBigSize}>{stars}</Container>;
}
