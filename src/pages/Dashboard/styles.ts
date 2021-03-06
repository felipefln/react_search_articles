import styled, { css } from "styled-components";
import { shade } from "polished";

interface FormProps {
    hasError: boolean;
}

export const Header = styled.div`
    display: flex;
    width: 1200px;

    a {
        color: black;
        text-decoration: none;
        font-size: 30px;
        font-weight: bold;
    }
`;

export const Title = styled.h1`
    font-size: 67px;
    color: #251e1c;
    margin-top: 30px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 60px;
    max-width: 800px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 1;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #251e1c;

        ${(props) =>
            props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background: #251e1c;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, "#7C7877")};
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 115%;
        padding: 24px;
        display: block;
        text-decoration: none;

        display: flex;
        align-items: center;
        transition: transform 0.2;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50px;
        }

        div {
            margin: 0 16px;
            flex: 1;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;

export const Loading = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    border: 2px solid transparent;
    background: 0;
    border-radius: 999px;
    border-top-color: deepskyblue;
    border-left-color: deepskyblue;
    animation: spin 0.7s infinite linear;

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
`;
