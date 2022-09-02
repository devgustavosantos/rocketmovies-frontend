import { Container, Content, Form, BackgroundImg } from "./styles";

import { Input } from "../../components/Input";

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
        </Form>
      </Content>
      <BackgroundImg />
    </Container>
  );
}

{
  /* <Container>
<Content>
  <Form>
    <h1></h1>
    <p></p>
    <h2></h2>
    <Input />
    <Input />
    <Button />
    <ButtonText />
  </Form>
</Content>
<BackgroundImg></BackgroundImg>
</Container> */
}
