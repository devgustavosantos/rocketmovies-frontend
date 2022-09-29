import { Link } from "react-router-dom";

import { Container, Profile, Logout } from "./styles";
import { Wrapper } from "../Wrapper";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export function Header({ children }) {
  const { userInfos, signOut } = useAuth();

  const avatar = userInfos.avatar
    ? `${api.defaults.baseURL}/files/${userInfos.avatar}`
    : avatarPlaceholder;

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
            <p>{userInfos.name}</p>
            <Logout type="button" onClick={handleSignOut}>
              Sair
            </Logout>
          </div>
          <Link to="/profile">
            <img src={avatar} alt={`Foto de ${userInfos.name}`} />
          </Link>
        </Profile>
      </Wrapper>
    </Container>
  );
}
