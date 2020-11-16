import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transition: 150ms linear;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        flex-direction: row;
        border-bottom: #c4c4c4 solid 1px;
        max-width: 100%;
    }

    @media (min-width: 1366px) {
        align-items: center;
        padding-bottom: 20px;
    }
`;