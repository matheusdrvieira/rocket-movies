import { Container } from "./style";
import { Link } from "react-router-dom";

export function ButtonText({ title, icon: Icon, ...rest }) {
    return (
        <Link to="/">
            < Container
                type="button"
                {...rest}
            >
                {Icon && <Icon size={16} />}
                {title}
            </Container >
        </Link>
    )
}