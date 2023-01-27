import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:100vh;

>main{
    padding:0 106px;
    
    >section{
        padding:46px 20px 0;
        overflow-y:auto;
        height:820px;
    
        >div{
            display:flex;
            justify-content:space-between;

            gap:40px;
            margin-top:40px;
       
            >input{
                width:50%;
            }
        }

        >h2{
            font-size:32px;       
            font-weight: 400;
            margin-top:24px;
        }

        >TextArea{
            margin:40px 0 40px;
        }

        >h3{
            font-weight: 400;
            font-size: 20px;
            
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        #movieTag{
            display:flex;
            justify-content:flex-start;
            flex-wrap:wrap;
        
            padding:16px;
            border-radius:10px;
            background-color:${({ theme }) => theme.COLORS.BLACK};
        }

        #delete{
            color: ${({ theme }) => theme.COLORS.ROSA};
            background-color:${({ theme }) => theme.COLORS.BLACK};
        }

        #buttons{
            margin-bottom:90px;
        }

        ::-webkit-scrollbar {
            width: 6px;
        }
        
        ::-webkit-scrollbar-thumb {
            background:${({ theme }) => theme.COLORS.ROSA};
            border-radius: 10px;
        }
    }
}
`;
