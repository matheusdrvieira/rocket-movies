import { Container } from "./style";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Movies } from "../../components/Movies"
import { RiAddLine } from "react-icons/ri"


export function MyMovies() {
    return (
        <Container>
            <Header />
            <main>
                <div>
                    <h2>Meus filmes </h2>
                    <Button to="/new" title="Adicionar filme" icon={RiAddLine} />
                </div>
                <section>
                    <Movies data={{
                        title: "Interrestelar",
                        rating: 3,
                        content: "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand...",
                        tags: [
                            { id: "1", name: "Ficção Científica" },
                            { id: "2", name: "Drama" },
                            { id: "3", name: "Família" }
                        ]
                    }} />
                </section>
            </main>
        </Container >
    )
}