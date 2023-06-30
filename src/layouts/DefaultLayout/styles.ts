import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 80rem;
    height: calc(130vh - 10rem);
    margin: 4rem auto;
    padding: 1.5rem;

    background: ${props => props.theme["gray-800"]};
    border-radius: 8px;
    box-shadow: 0 0 0 1px ${props => props.theme["yellow-logo"]};

    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        max-width: 90%;
        height: auto;
        margin: 2rem auto;
        padding: 1rem; 
    }
`;

