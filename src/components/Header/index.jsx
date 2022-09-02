import { Container, Profile, Logout } from "./styles";

import { Input } from "../Input";
import { Wrapper } from "../Wrapper";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <h2>RocketMovies</h2>
        <Input className="search" placeholder="Pesquisar pelo título" />
        <Profile>
          <div>
            <p>Gustavo Santos</p>
            <Logout>Sair</Logout>
          </div>
          <a href="#">
            <img
              src="https://github.com/devgustavosantos.png"
              alt="Foto do Usuário"
            />
          </a>
        </Profile>
      </Wrapper>
    </Container>
  );
}
