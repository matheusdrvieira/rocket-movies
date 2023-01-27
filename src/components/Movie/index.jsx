import { Container } from "./style";
import { Tags } from "../Tags";
import { Rating } from "../Rating";
import { RiTimer2Line } from "react-icons/ri";
import { format, toDate } from "date-fns";

export function Movie({ data, ...rest }) {

    let formattedDate = format(toDate(Date.parse(data.date)), `dd/MM/yyyy 'às' H:mm`);

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
                <img src="https://github.com/matheusvieira14.png" alt="Foto de Usuario" />
                <p>Por <strong>{data.name}</strong></p>
                <RiTimer2Line />
                <span>{formattedDate}</span>
            </div>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                    }
                </footer>
            }

            <p>{data.content}</p>
        </Container >
    )

}