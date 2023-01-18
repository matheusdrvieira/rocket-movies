import styled from "styled-components";

export const Container = styled.span`
      font-size:12px;

      border-radius:10px;
   
      padding:5px 0;
   
      color:${({ theme }) => theme.COLORS.WHITE};

      >svg{
        margin-right:2px;

        color:${({ theme }) => theme.COLORS.ROSA};
      }
`;