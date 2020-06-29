import styled from "styled-components";
import { shade } from "polished";

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

        svg {
            margin-right: 4px;
        }
    }

    span {
        font-size: 30px;
        font-weight: bold;
    }
`;

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }
            p {
                font-size: 18px;
                color: #737380;
                margin-top: 4px;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            margin-right: 80px;
        }
        strong {
            display: block;
            font-size: 36px;
            color: #3d3d4d;
        }
        span {
            display: block;
            margin-top: 4px;
            color: #6c6c80;
        }
    }
`;

export const Article = styled.div`
    margin-top: 80px;
    max-height: 800px;

    a {
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        cursor: pointer;

        display: flex;
        align-items: center;
        transition: transform 0.2;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }

        div {
            margin: 0 16px;
            flex: 1;
            max-width: 800px;

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #000000;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #cbcbd6;
        }
    }
`;

export const ButtonDownload = styled.button`
    margin-top: 50px;
    width: 210px;
    height: 70px;
    background: #251e1c;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #7c7877;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
        background: ${shade(0.2, "#7C7877")};
    }
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 30px;
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
