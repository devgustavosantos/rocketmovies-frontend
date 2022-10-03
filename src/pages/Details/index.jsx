import { FiClock, FiArrowLeft } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Top, Infos } from "./styles";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Details() {
  const [data, setData] = useState({});
  const [dateFormatted, setDateFormatted] = useState(null);

  const { userInfos } = useAuth();

  const avatar = userInfos.avatar
    ? `${api.defaults.baseURL}/files/${userInfos.avatar}`
    : avatarPlaceholder;

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.updated_at) {
      const initialFormat = data.updated_at;

      const [date, hour] = initialFormat.split(" ");

      const [year, month, day] = date.split("-");

      const [hours, minutes] = hour.split(":");

      setDateFormatted({
        date: `${day}/${month}/${year}`,
        hour: `${hours - 3}:${minutes}`,
      });
    }
  }, [data]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/notes/${params.id}`);
        setData(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert(
            "Não foi possível carregar  os dados deste filme. Tente novamente mais tarde."
          );
          navigate(-1);
          console.log(error);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Header />
      <main>
        <Wrapper>
          <Top>
            <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
            <div className="highlight">
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
            </div>
            <Infos>
              <div className="user-infos">
                <img src={avatar} alt={`Foto de ${userInfos.name}`} />
                <p>Por {userInfos.name}</p>
              </div>

              <div className="note-infos">
                <FiClock />
                {dateFormatted && (
                  <p>
                    {dateFormatted.date} ás {dateFormatted.hour}
                  </p>
                )}
              </div>
            </Infos>
          </Top>
          {data.tags && (
            <div className="tags">
              {data.tags.map(tag => (
                <Tag name={tag.name} key={tag.id} />
              ))}
            </div>
          )}
          {data.description && (
            <p className="description">{data.description}</p>
          )}
        </Wrapper>
      </main>
    </Container>
  );
}
