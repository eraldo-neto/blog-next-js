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

export const CardImage = styled.div`
    height: 180px;
    overflow: hidden;

    & img {
        object-fit: cover;
    }

    @media(min-width: 768px) {
        height: 98px;
    }

    @media(min-width: 1366px) {
        width: 259px;
        height: 173px;
        margin-right: 30px;
    }
`;