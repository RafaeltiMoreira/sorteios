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
        }

        img {
            display: inline-block;
        }
    }
`;