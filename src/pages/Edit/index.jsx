import { FiArrowLeft } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Inputs, TextArea, Buttons } from "./styles";
import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";
import { api } from "../../services/api";

export function Edit() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  function inputValidator() {
    if (!title) {
      alert("É necessário dar um título para cadastrar um filme.");
      return false;
    }

    const isRatingValid = rating >= 0 && rating <= 5 && rating !== "";

    if (!isRatingValid) {
      alert("É necessário dar uma nota entre 0 e 5 para cadastrar um filme.");
      return false;
    }

    if (newTag) {
      alert(
        "Um marcador foi preenchido, mas não foi adicionado. Adicione-o, ou deixe o campo vazio."
      );
      return false;
    }

    return true;
  }

  function handleBack() {
    const userConfirmation = confirm(
      "Todas as mudanças serão perdidas...Tem certeza que deseja descartar as alterações?"
    );

    if (userConfirmation) {
      navigate(-1);
    }
  }

  function handleAddNewTag() {
    const tagAlreadyAdded = tags.includes(newTag);

    if (tagAlreadyAdded) {
      return alert("Este marcador já foi adicionado!");
    }

    if (newTag !== "") {
      setTags(prevState => [...prevState, newTag]);
      setNewTag("");
    }
  }

  function handleDeleteTag(deleted) {
    const tagsFiltered = tags.filter(tag => tag !== deleted);

    setTags(tagsFiltered);
  }

  async function handleSave() {
    const passedValidation = inputValidator();

    if (passedValidation) {
      try {
        api.put(`/notes/${params.id}`, { title, description, rating, tags });
        alert("Filme editado com sucesso!");
        navigate("/");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar o filme");
          console.log(error);
        }
      }
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/notes/${params.id}`);
        const { data } = response;

        setTitle(data.title);
        setRating(data.rating);
        setDescription(data.description);

        const onlyTagsNames = data.tags.map(tag => tag.name);
        setTags(onlyTagsNames);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível carregar os dados");
          console.log(error);
          navigate("/");
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
          <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />
          <h1>Editar filme</h1>
          <Inputs>
            <Input
              placeholder="Título"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              min="0"
              max="5"
              value={rating}
              onChange={e => setRating(e.target.value)}
            />
          </Inputs>
          <TextArea
            placeholder="Observações"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <h2>Marcadores</h2>
          <section className="note-items">
            {tags.map((tag, index) => (
              <NoteItem
                key={`${tag}-${index}`}
                onClick={() => handleDeleteTag(tag)}
                value={tag}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Nova tag"
              onClick={handleAddNewTag}
              value={newTag}
              onChange={e => setNewTag(e.target.value)}
            />
          </section>
          <Buttons>
            <Button
              title="Descartar alterações"
              highlighted={false}
              onClick={handleBack}
            />
            <Button title="Salvar alterações" onClick={handleSave} />
          </Buttons>
        </Wrapper>
      </main>
    </Container>
  );
}
