import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width:100%;
    height:56px;
    
    border-radius:10px;

    margin-top:16px;

    font-weight:500;

    display:flex;
    align-items:center;
    justify-content:center;

    background-color: ${({ theme }) => theme.COLORS.ROSA};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    &:disabled{
        opacity:0.5;
    }
`;