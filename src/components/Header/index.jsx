import { Link, useNavigate } from "react-router-dom";

import { Container, Profile, Logout } from "./styles";
import { Wrapper } from "../Wrapper";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../services/api";

export function Header({ children }) {
  const { userInfos, signOut } = useAuth();

  const navigate = useNavigate();

  const avatar = userInfos.avatar
    ? `${api.defaults.baseURL}/files/${userInfos.avatar}`
    : avatarPlaceholder;

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  return (
    <Container>
      <Wrapper>
        <Link to="/" className="only-in-desktop">
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
