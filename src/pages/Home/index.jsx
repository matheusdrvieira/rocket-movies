import { Container } from "./style";
import { Button } from "../../components/Button";

export function Home() {
    return (
        <Container>
            < h1 > Hello Word </h1 >
            <span>My Pika</span>
            <Button title="Entrar" />
            <Button title="Entrando" loading />
            <Button title="Entrou" />
        </Container>
    )
}