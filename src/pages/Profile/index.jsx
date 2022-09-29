import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from "react-icons/fi";
import { useState } from "react";

import { Container, Header, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

export function Profile() {
  const { userInfos, updateUser } = useAuth();

  const [name, setName] = useState(userInfos.name);
  const [email, setEmail] = useState(userInfos.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [noInputHasBeenChanged, setNoInputHasBeenChanged] = useState(true);

  function handleUpdate() {
    const infosUpdated = {
      new_name: name,
      new_email: email,
      new_password: newPassword,
      current_password: oldPassword,
    };

    updateUser({ user: infosUpdated });
  }

  return (
    <Container>
      <Header>
        <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
      </Header>
      <Form>
        <Avatar>
          <img
            src="https://github.com/devgustavosantos.png"
            alt="Foto do Usuário"
          />
          <label htmlFor="user-photo">
            <FiCamera />
            <input type="file" id="user-photo" accept="image/png, image/jpeg" />
          </label>
        </Avatar>
        <Input
          icon={FiUser}
          placeholder="Nome"
          value={name}
          onChange={e => {
            setName(e.target.value);
            setNoInputHasBeenChanged(false);
          }}
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            setNoInputHasBeenChanged(false);
          }}
        />
        <Input
          icon={FiLock}
          placeholder="Senha atual"
          type="password"
          value={oldPassword}
          onChange={e => {
            setOldPassword(e.target.value);
            setNoInputHasBeenChanged(false);
          }}
        />
        <Input
          icon={FiLock}
          placeholder="Nova senha"
          type="password"
          value={newPassword}
          onChange={e => {
            setNewPassword(e.target.value);
            setNoInputHasBeenChanged(false);
          }}
        />
        <Button
          title="Salvar"
          disabled={noInputHasBeenChanged}
          onClick={handleUpdate}
        />
      </Form>
    </Container>
  );
}
