import styled from "styled-components";

export const SectionHeader = styled.h2`
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    padding-bottom: 20px;
`;

export const SectionField = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.silver};
    box-shadow: 0px 0px 20px 0px ${({ theme }) => theme.color.silver};
    margin: 20px 0;
    padding: 20px;
`;

export const SectionArea = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMac}px) {
        grid-template-columns: 1fr;
    }
`;