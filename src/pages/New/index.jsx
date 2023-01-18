import { Container } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../..//components/Input"
import { TextArea } from "../..//components/TextArea"
import { FiArrowLeft } from "react-icons/fi"
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <section>
                    <ButtonText title="Voltar" icon={FiArrowLeft} />
                    <h2>Novo filme </h2>
                    <div>
                        <Input type="text" placeholder="Título" />
                        <Input type="number" placeholder="Sua nota (de 0 a 5)" min="0" max="5" />
                    </div>
                    <TextArea placeholder="Observações" />
                    <h3>Marcadores</h3>

                    <div id="noteItem">
                        <NoteItem value="react" />
                        <NoteItem isNew placeholder="Novo marcador" />

                    </div>

                    <div id="buttons">
                        <Button id="delete" title="Excluir filme" />
                        <Button title="Salvar alterações" />
                    </div>
                </section>
            </main>
        </Container >
    )
}