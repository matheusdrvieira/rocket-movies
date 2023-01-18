import { Container } from "./style";
import { RiStarFill, RiStarLine } from "react-icons/ri"

export function Rating({ rating }) {
    return (
        < Container>
            {[...new Array(5)].map((arr, index) => {
                return index < rating ? <RiStarFill key={index} /> : <RiStarLine key={index} />;
            })}
        </Container >
    )
}