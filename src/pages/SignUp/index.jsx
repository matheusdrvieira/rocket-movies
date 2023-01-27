import { useState } from "react";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container, Form, Background } from "./style";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const [name, setName,] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuario cadastrado com sucesso!");
                navigate("/");
            })
            .catch(error => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Nao foi possivel cadastrar");
                }
            });
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>

                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

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
                    title="Cadastrar"
                    onClick={handleSignUp}
                />
                <ButtonText title="Voltar para o login" icon={FiArrowLeft} to="/" />
            </Form>
            <Background />
        </Container>
    )
}