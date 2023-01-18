import { Container } from "./style";
import { Tags } from "../Tags";
import { Rating } from "../Rating";

export function Notes({ data, ...rest }) {
    return (
        < Container {...rest}>

            <h1>{data.title}</h1>

            {
                data.rating &&
                <span>
                    <Rating rating={data.rating} />
                </span>
            }

            <p>{data.content}</p>

            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
        </Container >
    )
}