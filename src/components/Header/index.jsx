import { Link } from "react-router-dom";

import { Container, Profile, Logout } from "./styles";
import { Input } from "../Input";
import { Wrapper } from "../Wrapper";
import { useAuth } from "../../hooks/auth";

export function Header({ children }) {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <h2>RocketMovies</h2>
        </Link>
        {children}
        <Profile>
          <div>
            <p>Gustavo Santos</p>
            <Logout type="button" onClick={handleSignOut}>
              Sair
            </Logout>
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
