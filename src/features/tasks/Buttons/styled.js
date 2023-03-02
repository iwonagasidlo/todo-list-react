import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin-left: 20px;
    transition: filter 0.5s;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
        cursor: pointer;
    }

    &:active {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;