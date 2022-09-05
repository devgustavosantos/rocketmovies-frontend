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
            <ButtonAdd>
              <FiPlus /> Adicionar filme
            </ButtonAdd>
          </Top>
          <Notes>
            <Note
              data={{
                title: "Nota React",
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

{
  /* <Content>
  <Rating />
  <Note>
    <h3>Titulo da nota</h3>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
      nesciunt architecto laborum, quasi officiis consequatur facilis!
      Quisquam explicabo non rem repellat debitis incidunt, illum
      veniam libero amet enim iste a?
    </p>
  </Note>
  
  <Tags>
    <Tag></Tag>
  </Tags>
</Content>
</main>
</Container> */
}
