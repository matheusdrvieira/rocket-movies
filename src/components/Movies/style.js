import styled from "styled-components";

export const Container = styled.button`
   width:100%;
   
   background-color:${({ theme }) => theme.COLORS.BACKGROUND_500};

   border:none;
   border-radius:10px;
   text-align:left;

   padding:22px;
   margin-bottom:16px;

      >h1{
      flex:1;
      
      margin-bottom:15px;

      font-weight:700;
      font-size:24px;

      color:${({ theme }) => theme.COLORS.WHITE};
      }

      >p{
      font-family: 'Roboto';
      font-weight:400;
      font-size:16px;

      text-align:left;
      line-height: 19px;

      margin-top:15px;

      color:${({ theme }) => theme.COLORS.GRAY_100};
      }

      >footer{
      width:100%;
      display:flex;
      margin-top:24px;
      }
`;