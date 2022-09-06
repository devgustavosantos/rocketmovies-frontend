import { Container, Top, ButtonAdd, Notes } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Note } from "../../components/Note";

import { FiPlus } from "react-icons/fi";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <Wrapper>
          <Top>
            <h1>Meus filmes</h1>
            <ButtonAdd to="/new">
              <FiPlus /> Adicionar filme
            </ButtonAdd>
          </Top>
          <Notes>
            <Note
              data={{
                title: "Filme",
                rating: 4,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolorem incidunt est ex, libero repellendus reprehenderit labore a dicta nulla excepturi accusamus consectetur? Recusandae, labore natus deserunt totam fugiat quibusdam.",
                tags: [
                  { name: "react", id: 1 },
                  { name: "javascript", id: 2 },
                  { name: "programação", id: 3 },
                ],
              }}
            />
            <Note
              data={{
                title: "Filme",
                rating: 4,
                description:
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolorem incidunt est ex, libero repellendus reprehenderit labore a dicta nulla excepturi accusamus consectetur? Recusandae, labore natus deserunt totam fugiat quibusdam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolorem incidunt est ex, libero repellendus reprehenderit labore a dicta nulla excepturi accusamus consectetur? Recusandae, labore natus deserunt totam fugiat quibusdam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolorem incidunt est ex, libero repellendus reprehenderit labore a dicta nulla excepturi accusamus consectetur? Recusandae, labore natus deserunt totam fugiat quibusdam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolorem incidunt est ex, libero repellendus reprehenderit labore a dicta nulla excepturi accusamus consectetur? Recusandae, labore natus deserunt totam fugiat quibusdam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolorem incidunt est ex, libero repellendus reprehenderit labore a dicta nulla excepturi accusamus consectetur? Recusandae, labore natus deserunt totam fugiat quibusdam. ",
                tags: [
                  { name: "react", id: 1 },
                  { name: "javascript", id: 2 },
                  { name: "programação", id: 3 },
                ],
              }}
            />
            <Note
              data={{
                title: "Filme",
                rating: 4,
                description:
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolorem incidunt est ex, libero repellendus reprehenderit labore a dicta nulla excepturi accusamus consectetur? Recusandae, labore natus deserunt totam fugiat quibusdam.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores dolorem incidunt est ex, libero repellendus reprehenderit labore a dicta nulla excepturi accusamus consectetur? Recusandae, labore natus deserunt totam fugiat quibusdam.",
                tags: [
                  { name: "react", id: 1 },
                  { name: "javascript", id: 2 },
                  { name: "programação", id: 3 },
                ],
              }}
            />
          </Notes>
        </Wrapper>
      </main>
    </Container>
  );
}
