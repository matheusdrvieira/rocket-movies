import { Container, Profile, TextUser, ImgUser, ButtonTextExit, LogoText } from "./style";
import { RiSearch2Line } from "react-icons/ri"
import { Input } from "../Input";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useEffect, useState } from "react";

export function Header({ handleCallback }) {
    const { signOut, user } = useAuth();
    const [search, setSearch] = useState("");

    useEffect(() => {

        if (handleCallback != null) {
            handleCallback(search)
        }

    }, [search]);

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    return (
        < Container>
            <LogoText to="/">RocketMovies</LogoText>
            <Input
                type="text"
                placeholder="Pesquisar pelo título"
                icon={RiSearch2Line}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Profile>
                <div>
                    <TextUser to="/profile">{user.name}</TextUser>
                    <ButtonTextExit onClick={signOut}>Sair</ButtonTextExit>
                </div>
                <ImgUser to="/profile"><img src={avatarUrl} alt={user.name} /></ImgUser>
            </Profile>
        </Container >
    )
}