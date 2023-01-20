import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
    width:100%;
    height:116px;

    display:flex;
    align-items:center;
    justify-content:space-between;
    
    padding:0 123px;

    border-width:1px;
    border-bottom-style:solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

        div:nth-child(2){
        width:630px;
        }
`;

export const Profile = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
  
        div:nth-child(1){
            display:flex;
            flex-direction:column;
            align-items:end;
        }
`;

export const LogoText = styled(Link)`
    font-weight: 700;
    font-size: 24px;
    
    color: ${({ theme }) => theme.COLORS.ROSA};
`;

export const TextUser = styled(Link)`
   color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ImgUser = styled(Link)`

    >img{
            width:64px;
            height:64px;

            border-radius:50%;
        } 
`;

export const ButtonTextExit = styled(Link)`
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;