import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Content, Form, BackgroundImg } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    const someoneFieldWasNotFilled = !name || !email || !password;

    if (someoneFieldWasNotFilled) {
      return alert("Preencha todos os campos para realizar o cadastro!");
    }

    try {
      await api.post("/users", { name, email, password });
      alert("O usuário foi cadastrado com sucesso. Agora você pode se logar.");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(
          "Não foi possível cadastrar o usuário. Por favor tente novamente mais tarde."
        );
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Content>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Crie sua conta</h2>
          <Input
            icon={FiUser}
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            icon={FiMail}
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            icon={FiLock}
            placeholder="Senha"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button title="Cadastrar" onClick={handleSignUp} />
          <ButtonText to="/" icon={FiArrowLeft} title="Voltar para o login" />
        </Form>
      </Content>
      <BackgroundImg />
    </Container>
  );
}
