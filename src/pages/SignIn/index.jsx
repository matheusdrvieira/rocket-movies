import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container, Form, Background } from "./style";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input type="text" placeholder="Nome" icon={FiUser} />
                <Input type="text" placeholder="E-mail" icon={FiMail} />
                <Input type="text" placeholder="Senha" icon={FiLock} />

                <Button title="Entrar" />
                <ButtonText title="Criar conta" to="/register" />
            </Form>
            <Background />
        </Container>
    )
}