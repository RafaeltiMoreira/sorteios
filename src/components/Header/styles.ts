import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        a {
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;

            font-weight: bold;
            padding: 0 0.5rem;
            border-radius: 6px;
            cursor: pointer;

            color: ${props => props.theme["gray-100"]};
            border: 1px solid transparent;

            &:hover {
                color: ${( { theme } ) => theme["yellow-logo"]};
                border: 1px solid ${( { theme } ) => theme["yellow-logo"]};
            }

            &.active {
                color: ${( { theme } ) => theme["yellow-logo"]};
                border: 1px solid ${( { theme } ) => theme["yellow-logo"]};
            }

            @media (max-width: 768px) {
                font-size: 0.9rem;
            }

            @media (max-width: 480px) {
                font-size: 0.8rem;
            }

            @media (max-width: 420px) {
                font-size: 0.7rem;
            }

            @media (max-width: 360px) {
                font-size: 0.5rem;
            }

        }

        img {
            display: inline-block;
        }
    }
`;