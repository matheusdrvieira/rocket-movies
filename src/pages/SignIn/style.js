import styled from "styled-components";
import background from "../../assets/background.png";

export const Container = styled.div`
    height:100vh;

    display:flex;
    align-items:stretch;
`;

export const Form = styled.form`
    padding:0 136px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    text-align:center;

        >h1{
            font-size: 48px;

            color:${({ theme }) => theme.COLORS.ROSA};
        }

        >p{
            font-size: 14px;
            line-height: 18px;

            color:${({ theme }) => theme.COLORS.GRAY};
        }

        >h2{
            font-weight: 500;
            font-size: 24px;
            margin:48px 0 48px;

            color:${({ theme }) => theme.COLORS.WHITE};
        }

        >div{
            margin-bottom:8px;
        }

        >a{
            margin-top:42px;
        }
`;

export const Background = styled.div`
    flex:1;

    background:url(${background}) no-repeat center;
    background-size:cover;
`;