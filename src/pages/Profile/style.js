import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh;

    >header{
        width:100%;
        height:144px;

        display:flex;
        align-items:center;
        
        padding:0 124px;

        background:${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
`;

export const Form = styled.form`
max-width:340px;
margin:30px auto 0;

    >div{
        margin-bottom:8px;
    }

    >div:nth-child(1){
        margin-bottom:64px;
    }
   
    >div:nth-child(3){
        margin-bottom:18px;
    }
`;

export const Avatar = styled.div`
width:186px;
height:186px;

position:relative;
margin:-124px auto 32px;

>img{
    width:186px;
    height:186px;

    border-radius:50%;
}

>label{
    width:48px;
    height:48px;

    border-radius:50%;

    display:flex;
    align-items:center;
    justify-content:center;

    position:absolute;

    bottom:7px;
    right:7px;

    cursor: pointer;

    background:${({ theme }) => theme.COLORS.ROSA};

    >input{
        display:none;
    }
    
    >svg{
        color:${({ theme }) => theme.COLORS.BLACK};
    }
}
`;
