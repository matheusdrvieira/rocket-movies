import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container, Form, Background } from "./style";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({ email, password, name })
    }


    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input
                    type="text"
                    placeholder="Nome"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type="text"
                    placeholder="Senha"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button
                    title="Entrar"
                    onClick={handleSignIn}
                />
                <ButtonText title="Criar conta" to="/register" />
            </Form>
            <Background />
        </Container>
    )
}