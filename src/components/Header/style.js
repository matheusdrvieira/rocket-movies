import styled from "styled-components";

export const Container = styled.header`
    width:100%;
    height:116px;

    display:flex;
    align-items:center;
    justify-content:space-between;

    grid-area:header;
    
    padding:0 123px;

    border-width:1px;
    border-bottom-style:solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.ROSA};

    div:nth-child(2){
       width:630px;
    }
`;

export const Profile = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
  
    >img{
        width:64px;
        height:64px;

        border-radius:50%;
    } 
    div:nth-child(1){
        display:flex;
        flex-direction:column;
        align-items:end;

        color: ${({ theme }) => theme.COLORS.WHITE};

        >button{
            border:none;
            background:none;

            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
`;