import { Container, Profile, Logout } from "./styles";

import { Input } from "../../components/Input";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input className="search" placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <p>Gustavo Santos</p>
          <Logout>Sair</Logout>
        </div>
        <img
          src="https://github.com/devgustavosantos.png"
          alt="Foto do Usuário"
        />
      </Profile>
    </Container>
  );
}
