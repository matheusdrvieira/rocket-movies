import { Container } from "./style";
import { Tags } from "../Tags";
import { Rating } from "../Rating";
import { RiTimer2Line } from "react-icons/ri";
import { format, toDate } from "date-fns";
import { useAuth } from "../../hooks/auth";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Movie({ data, ...rest }) {
    const { user } = useAuth();
    const [date, setDate] = useState("")

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    useEffect(() => {

        async function formatedDate() {
            if (data.created_at) {
                const formatedDate = await format(toDate(Date.parse(data.created_at)), `dd/MM/yyyy 'às' H:mm`);
                setDate(formatedDate);
            }
        }
        formatedDate()
    }, [data]);

    return (
        < Container {...rest}>
            <div>
                <h1>{data.title}</h1>

                {
                    data.rating &&
                    <span>
                        <Rating rating={data.rating} />
                    </span>
                }
            </div>

            <div>
                <img src={avatarUrl} alt="Foto de Usuario" />
                <p>Por <strong>{user.name}</strong></p>
                <RiTimer2Line />
                <span>{date}</span>
            </div>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                    }
                </footer>
            }

            <p>{data.description ? data.description : "Nenhuma descricao disponivel"}</p>
        </Container >
    )

}