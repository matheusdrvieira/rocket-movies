import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container, Form, Background } from "./style";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <h2>Crie sua conta</h2>
                <Input type="text" placeholder="Nome" icon={FiUser} />
                <Input type="text" placeholder="E-mail" icon={FiMail} />
                <Input type="text" placeholder="Senha" icon={FiLock} />
                <Button title="Cadastrar" />
                <a href="/"><ButtonText title="Voltar para o login" icon={FiArrowLeft} /></a>
            </Form>
            <Background />
        </Container>
    )
}