import styled from "styled-components";

export const FormContent = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        max-width: 750px;
    }       
`;

export const FormInput = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const FormButton = styled.button`
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
    border: none;
    transition: 0.5s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(120%);
    }
`;