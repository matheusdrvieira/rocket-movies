import { Container, Profile, TextUser, ImgUser, ButtonTextExit, LogoText } from "./style";
import { RiSearch2Line } from "react-icons/ri"
import { Input } from "../Input";

export function Header() {
    return (
        < Container>
            <LogoText to="/home">RocketMovies</LogoText>
            <Input type="text" placeholder="Pesquisar pelo título" icon={RiSearch2Line} />
            <Profile>
                <div>
                    <TextUser to="/profile">Matheus Vieira</TextUser>
                    <ButtonTextExit to="/">Sair</ButtonTextExit>
                </div>
                <ImgUser to="/profile"><img src="https://github.com/matheusvieira14.png" alt="Foto de Usuario" /></ImgUser>
            </Profile>
        </Container >
    )
}