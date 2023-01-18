import styled from "styled-components";

export const Container = styled.textarea`
   width:100%;
   height:274px;

   border:0;
   border-radius:10px;
   padding:14px;
   resize:none;
   
   color:${({ theme }) => theme.COLORS.WHITE};
   background:${({ theme }) => theme.COLORS.BACKGROUND_800};

   &::placeholder{
    color:${({ theme }) => theme.COLORS.GRAY_300};
   }
   
`;