import styled from "styled-components";

export const Title = styled.h1`
    font-size: 40px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        transition: color 0.2s;

        &:hover {
            color: #666;
        }
    }

    span {
        font-size: 30px;
        font-weight: bold;
    }
`;
