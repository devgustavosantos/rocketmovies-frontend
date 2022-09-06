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
                  "Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh",
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
                  " Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh ",
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
                  "Lorem gfni dsgiuf  fsdgdf  fdgdf gdfg dfg dfg dfg dfg dfg dfgdfg fdhg f hg fgh gfh g dshgu ihsdiu hgfisdh",
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
