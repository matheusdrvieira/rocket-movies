import { Container } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../..//components/Input"
import { TextArea } from "../..//components/TextArea"
import { api } from "../../services/api";
import { FiArrowLeft } from "react-icons/fi"
import { Button } from "../../components/Button";
import { MovieTag } from "../../components/MovieTag";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function New() {
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState("");
    const [description, setDescription] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    const navigate = useNavigate();

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    }

    async function handleNewMovie() {
        if (!title) {
            return alert("Voce esqueceu de adicianar um titulo.")
        }

        if (!rating) {
            return alert("Voce esqueceu de dar sua nota.")
        }

        if (newTag) {
            return alert("Voce esqueceu de adicianar uma tag. Limpe campo tag ou adicione sua tag!")
        }

        await api.post("/movies", {
            title,
            description,
            tags,
            rating
        });
        alert("Filme criado com sucesso!");
        navigate("/");
    }

    return (
        <Container>
            <Header />
            <main>
                <section>
                    <ButtonText to="/" title="Voltar" icon={FiArrowLeft} />
                    <h2>Novo filme </h2>

                    <div>
                        <Input
                            type="text"
                            placeholder="Título"
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Input
                            type="number"
                            placeholder="Sua nota (de 0 a 5)"
                            min="0" max="5"
                            onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    <TextArea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <h3>Marcadores</h3>

                    <div id="movieTag">

                        {
                            tags.map((tag, index) => (
                                <MovieTag
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }

                        <MovieTag
                            isNew
                            placeholder="Novo marcador"
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                    </div>

                    <div id="buttons">
                        <Button
                            id="delete"
                            title="Excluir filme"
                        />
                        <Button
                            title="Salvar alterações"
                            onClick={handleNewMovie}
                        />
                    </div>
                </section>
            </main>
        </Container >
    )
}