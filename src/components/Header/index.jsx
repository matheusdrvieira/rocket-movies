import { Container, Profile, TextUser, ImgUser, ButtonTextExit, LogoText } from "./style";
import { RiSearch2Line } from "react-icons/ri"
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth"
import { api } from "../../services/api"

export function Header() {
    const { signOut } = useAuth();
    const { user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return (
        < Container>
            <LogoText to="/">RocketMovies</LogoText>
            <Input type="text" placeholder="Pesquisar pelo título" icon={RiSearch2Line} />
            <Profile>
                <div>
                    <TextUser to="/profile">Matheus Vieira</TextUser>
                    <ButtonTextExit onClick={signOut}>Sair</ButtonTextExit>
                </div>
                <ImgUser to="/profile"><img src={avatarUrl} alt="Foto de Usuario" /></ImgUser>
            </Profile>
        </Container >
    )
}