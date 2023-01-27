import styled from "styled-components";

export const Container = styled.div`
   display:flex;
   align-items:center;

   padding-right:16px;

   border-radius:10px;
   border:${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_200}` : "none"};

   color:${({ theme }) => theme.COLORS.ROSA};
   background-color:${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
   
    >button{
        background:none;
        border:none;

            >svg{
                color:${({ theme }) => theme.COLORS.ROSA};
            }
    }

    >input{
        width:100%;
        height:56px;

        border:none;
        padding:16px;

        background:transparent;
        color:${({ theme }) => theme.COLORS.WHITE};

            &::placeholder{
                color:${({ theme }) => theme.COLORS.GRAY_200};
            }
    }
`;