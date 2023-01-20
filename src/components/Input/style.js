import styled from "styled-components";

export const Container = styled.div`
   width:100%;
   height:56px;

   display:flex;
   align-items:center;

   border-radius:10px;
    
   background:${({ theme }) => theme.COLORS.BACKGROUND_800};
   
    >input{
        width:100%;
        height:56px;
        padding:14px;
        border:0;
        background:transparent;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    >svg{
        margin-left:16px;
        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
`;