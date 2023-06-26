import styled from "styled-components";

export const FooterContainer = styled.div`
    text-align: center;
    color: ${( { theme } ) => theme["gray-100"]};

    padding: 1rem;

    font-size: 0.875rem;
    line-height: 1.25rem;
    margin-top: 30px;

    a {
        color: ${( { theme } ) => theme["gray-100"]};
    }
    
`;