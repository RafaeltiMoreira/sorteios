import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 80vw;
    height: auto;
    margin: 4rem auto;
    padding: 1.5rem;

    background: ${props => props.theme["gray-800"]};
    border-radius: 8px;
    box-shadow: 0 0 0 1px ${props => props.theme["yellow-logo"]};

    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

