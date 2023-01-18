import { Container, Profile } from "./style";
import { RiSearch2Line } from "react-icons/ri"
import { Input } from "../Input";



export function Header() {
    return (
        < Container>
            <h1>RocketMovies</h1>
            <Input type="text" placeholder="Pesquisar pelo título" icon={RiSearch2Line} />
            <Profile>
                <div>
                    <p>Matheus Vieira</p>
                    <button>Sair</button>
                </div>
                <img src="https://github.com/matheusvieira14.png" alt="Foto de Usuario" />
            </Profile>
        </Container >
    )
}