import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px) {
        font-size: 0.88;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem; 
        margin-top: 60px;
    }

    h2 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 150px;
        margin-bottom: 50px;

        @media (max-width: 768px) { 
            margin-top: 60px;
            margin-bottom: 5px;
        }
    }

    h3 {
        margin-bottom: 100px;

        @media (max-width: 768px) { 
            margin-bottom: 30px;
        }
    }
`;