import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 75rem;
    min-height: 80vh;
    margin: 4rem auto;
    padding: 2.5rem;

    background: ${props => props.theme["gray-800"]};
    border-radius: 8px;
    box-shadow: 0 0 0 1px ${props => props.theme["yellow-logo"]};

    display: flex;
    flex-direction: column;
`;