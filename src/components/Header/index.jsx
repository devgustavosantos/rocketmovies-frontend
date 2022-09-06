import { Container, Profile, Logout } from "./styles";

import { Input } from "../Input";
import { Wrapper } from "../Wrapper";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <h2>RocketMovies</h2>
        </Link>
        <Input className="search" placeholder="Pesquisar pelo título" />
        <Profile>
          <div>
            <p>Gustavo Santos</p>
            <Logout>Sair</Logout>
          </div>
          <Link to="/profile">
            <img
              src="https://github.com/devgustavosantos.png"
              alt="Foto do Usuário"
            />
          </Link>
        </Profile>
      </Wrapper>
    </Container>
  );
}
