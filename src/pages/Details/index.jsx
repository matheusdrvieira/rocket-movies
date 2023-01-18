import { Container } from "./style";
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      < h1 > Hello Word </h1 >
      <span>My egg</span>
      <Button title="Entrar" />
      <Button title="Entrando" loading />
      <Button title="Entrou" />
    </Container>
  )
}