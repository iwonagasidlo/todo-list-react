import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    grid-gap: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    padding: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    width: 30px;
    height: 30px;
    padding: 5px;
    border: none;

    ${({ toggleDone }) => toggleDone && css`
        background-color: ${({ theme }) => theme.color.green};

        &:hover {
            filter: brightness(110%);
            transition: 0.5s;
        }

        &:active {
            filter: brightness(120%);
            transition: 0.5s;
        }
    `}

    ${({ remove }) => remove && css`
        background-color: ${({ theme }) => theme.color.red};

        &:hover {
            filter: brightness(110%);
            transition: 0.5s;
        }

        &:active {
            filter: brightness(120%);
            transition: 0.5s;
        }
    `};
`;