import { Container, Content, Form, BackgroundImg } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Content>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Faça seu login</h2>
          <Input icon={FiMail} placeholder="E-mail" />
          <Input icon={FiLock} placeholder="Senha" />
          <Button title="Entrar" />
          <ButtonText to="/register" title="Criar conta" />
        </Form>
      </Content>
      <BackgroundImg />
    </Container>
  );
}
