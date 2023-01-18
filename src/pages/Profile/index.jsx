import { Container, Form, Avatar } from "./style";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../..//components/Input"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi"
import { Button } from "../../components/Button";


export function Profile() {
    return (
        <Container>
            <header>
                <a href="/"><ButtonText title="Voltar" icon={FiArrowLeft} /></a>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/matheusvieira14.png" alt="Foto de Usuario" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>

                <Input type="text" placeholder="Nome" icon={FiUser} />
                <Input type="text" placeholder="E-mail" icon={FiMail} />
                <Input type="passoword" placeholder="Senha atual" icon={FiLock} />
                <Input type="passoword" placeholder="Nova senha" icon={FiLock} />

                <Button title="Salvar" />
            </Form>
        </Container >
    )
}