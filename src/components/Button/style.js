import styled from "styled-components";

export const Container = styled.button`
    width:100%;
    height:56px;
    border:0;
    border-radius:10px;
    margin-top:16px;
    font-weight:500;

    background-color: ${({ theme }) => theme.COLORS.ROSA};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    &:disabled{
        opacity:0.5;
    }
`;