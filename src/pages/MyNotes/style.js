import styled from "styled-components";

export const Container = styled.div`

width:100%;
height:100vh;

>main{
    padding:0 106px;
    margin-top:50px;
    
    >div{
        display:flex;
        justify-content:space-between;
        align-items:center;

        margin-bottom:40px;

    >h2{
        font-size:32px;       
        font-weight: 400;
    }

    >button{
        width:207px;
        height:48px;

        align-items:center;
        display:flex;
        justify-content:center;

        >svg{
            margin-right:5px;
        }
    }
    }

    >section{
        height:650px;
        overflow-y:auto;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background:${({ theme }) => theme.COLORS.ROSA};
        border-radius: 10px;
    }
    }
}
`;
