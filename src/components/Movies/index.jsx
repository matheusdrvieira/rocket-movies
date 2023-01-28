import { Container } from "./style";
import { Tags } from "../Tags";
import { Rating } from "../Rating";
import { Link } from "react-router-dom";

export function Movies({ data, ...rest }) {
    return (
        <Link to={`/details/${data.id}`}>
            < Container {...rest}>
                <h1>{data.title}</h1>

                {
                    data.rating &&
                    <span>
                        <Rating rating={data.rating} />
                    </span>
                }

                <p>{data.description ? data.description : "Nenhuma descricao disponivel"}</p>

                {
                    data.tags &&
                    <footer>
                        {
                            data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                        }
                    </footer>
                }
            </Container >
        </Link>
    )
}