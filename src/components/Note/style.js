import styled from "styled-components";

export const Container = styled.div`
   width:100%;
   
   text-align:left;

   padding:0 123px;
   margin-bottom:16px;
        
      >div {
         display:flex;
         gap:20px;
         align-items:baseline;
         margin-bottom:24px;

         >span{
            span{           
               display:flex;
               gap:10px;

               svg{
                  font-size:20px;
               }
            }
         }

         >h1{
         font-weight:700;
         font-size:36px;
      
         color:${({ theme }) => theme.COLORS.WHITE};
         }
      }

   div:nth-child(2){
      display:flex;
      align-items:center;
      gap:8px;
      img{
         width:16px;
         height:16px;
         border-radius:50%
      }

      p{
         color:${({ theme }) => theme.COLORS.WHITE};
      }

      strong{
         color:${({ theme }) => theme.COLORS.WHITE};
      }

      svg{
         font-size:20px;

         color:${({ theme }) => theme.COLORS.ROSA};
      }

      span{
         color:${({ theme }) => theme.COLORS.WHITE};
      }
   }

   div:nth-child(3){

      >p{
      font-weight:400;
      font-size:16px;

      text-align: justify;
      line-height: 19px;

      margin-top:15px;

      color:${({ theme }) => theme.COLORS.WHITE};
      }
}
   >footer{
      width:100%;
      display:flex;
      margin:40px 0 40px;
          
    >span{
       background:${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
   }
`;