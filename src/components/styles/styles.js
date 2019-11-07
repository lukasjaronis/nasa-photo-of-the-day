import styled from "styled-components";



     export const AppStyles = styled.div`
    display: flex;
      justify-content: center;
      align-items: center;
      width: 90%;
      height: 90%;
      margin: 3rem auto;
    `;
    
    
      export const NasaCardStyle = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        width: 80%;
        height: 80%;

        h1 {
            border-bottom: 1px solid grey;
            padding: 1rem;
            color: black;
        }

        p {
            padding: 1rem;
            color: black;
            line-height: 30px;
        }

        span {
            color: midnightblue;
            font-weight: 900;
        }

        img {
            height: 500px;
            width: 500px;
             border-radius: 25px;
        }
    `;



