import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    border:0;

    font-size:16px;

    display:flex;
    align-items:center;

    background:none;

    color: ${({ theme }) => theme.COLORS.ROSA};
`;