import { Container } from "./styles";

import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  return (
    <Container>
      <h1>Página não encontrada</h1>
      <p>A página que você tentou acessar não existe ou não está disponível!</p>
      <Button title="Voltar para a Página Inicial" onClick={handleBack} />
    </Container>
  );
}
