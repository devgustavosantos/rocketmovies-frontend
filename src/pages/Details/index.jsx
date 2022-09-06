import { Container, Top, Infos } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";

import { FiClock, FiArrowLeft } from "react-icons/fi";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Wrapper>
          <Top>
            <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
            <div className="highlight">
              <h1>Título da nota</h1>
              <Rating grade={4} isBigSize />
            </div>
            <Infos>
              <img
                src="https://github.com/devgustavosantos.png"
                alt="Foto do Usuário"
              />
              <p>Por Gustavo Santos</p>

              <FiClock />
              <p>25/05/2022 ás 08:00</p>
            </Infos>
          </Top>
          <div className="tags">
            {[
              { name: "react", id: 1 },
              { name: "javascript", id: 2 },
              { name: "programação", id: 3 },
            ].map(tag => (
              <Tag name={tag.name} key={tag.id} />
            ))}
          </div>
          <p className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
            voluptates! Vero accusantium ipsum eum nemo, dicta reiciendis magni
            rem doloribus alias porro, <br />
            <br />
            earum tempore temporibus id, nobis cumque quia vitae. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Expedita, voluptates!
            Vero accusantium ipsum eum nemo, dicta reiciendis magni rem
            doloribus alias porro, earum tempore temporibus id, nobis cumque
            quia vitae. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Expedita, voluptates! Vero accusantium ipsum eum nemo, dicta
            reiciendis magni rem doloribus alias porro, earum tempore temporibus
            <br />
            <br /> id, nobis cumque quia vitae. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Expedita, voluptates! Vero accusantium
            ipsum eum nemo, dicta reiciendis magni rem doloribus alias porro,
            earum tempore temporibus id, nobis cumque quia vitae. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Expedita, voluptates!
            Vero accusantium ipsum eum nemo, dicta reiciendis magni rem
            doloribus alias porro, earum tempore temporibus id, nobis cumque
            quia vitae. Lorem ipsum dolor, sit amet consectetur adipisicing eli
            <br />
            <br />
            t. Expedita, voluptates! Vero accusantium ipsum eum nemo, dicta
            reiciendis magni rem doloribus alias porro, earum tempore temporibus
            id, nobis cumque quia vitae. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Expedita, voluptates! Vero accusantium ipsum eum
            nemo, dicta reiciendis magni rem doloribus alias porro, earum
            tempore temporibus id, nobis cumque quia vitae. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Expedita, voluptates! Vero
            accusantium ipsum eum nemo, dicta reiciendis magni rem doloribus
            alias porro, earum tempore tempor
            <br />
            <br />
            ibus id, nobis cumque quia vitae. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Expedita, voluptates! Vero accusantium
            ipsum eum nemo, dicta reiciendis magni rem doloribus alias porro,
            earum tempore temporibus id, nobis cumque quia vitae.
          </p>
        </Wrapper>
      </main>
    </Container>
  );
}
