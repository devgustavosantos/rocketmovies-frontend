import { Container, Header, Form, Avatar } from "./styles";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
      <Header>
        <ButtonText icon={FiArrowLeft} title="Voltar" />
      </Header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/devgustavosantos.png"
            alt="Foto do Usuário"
          />
          <label for="user-photo">
            <FiCamera />
            <input type="file" id="user-photo" accept="image/png, image/jpeg" />
          </label>
        </Avatar>
        <Input icon={FiUser} placeholder="Nome" />
        <Input icon={FiMail} placeholder="E-mail" />
        <Input icon={FiLock} placeholder="Senha atual" />
        <Input icon={FiLock} placeholder="Nova senha" />
        <Button title="Salvar" disabled />
      </Form>
    </Container>
  );
}

{
  /* <Header>
<ButtonText />
</Header>
<Form>
<Avatar>
  <img src="" alt="" />
  <label>
    <Icon />
    <input type="file" />
  </label>
</Avatar>
<Input />
<Input />
<Input />
<Input />
<Button />
</Form>
</Container> */
}
