import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;

        @media (max-width: 768px) {
            gap: 0.3rem;
        }

        @media (max-width: 376px) {
            gap: 0.2rem;
        }

        a {
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 5px;

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
                font-size: 0.8rem;
                padding: 0 0.4rem;
            }

            @media (max-width: 480px) {
                height: 2rem;
            }

            @media (max-width: 381px) {
                padding: 0 0.3rem;
            }

            @media (max-width: 376px) {
                font-size: 0.6rem;
                height: 1.5rem;
            }

        }

        img {
            display: inline-block;

            @media (max-width: 768px) {
                display: none;
            }
        }

        .submenu {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }

        .submenu-arrow {
            margin-left: 4px;
            transform: rotate(0deg);
            transition: transform 0.3s ease-in-out;

        &.open {
            transform: rotate(180deg);
            }
        }

        .submenu-title {
            display: block;
            margin-bottom: 5px;

            &.active {
                color: ${( { theme } ) => theme["yellow-logo"]};
                border: 1px solid ${( { theme } ) => theme["yellow-logo"]};
            }
        }

        .submenu-content {
            display: none;
            position: absolute;

            &.active {
                color: ${( { theme } ) => theme["yellow-logo"]};
                border: 1px solid ${( { theme } ) => theme["yellow-logo"]};
            }
        }

        .submenu.open .submenu-content {
            display: block;
        }
    }
`;

/* ${({ isOpen }) => (isOpen ? "0" : "-100%")} */