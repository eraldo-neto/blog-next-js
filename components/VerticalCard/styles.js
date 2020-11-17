import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transition: 150ms linear;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;

    &:hover {
        box-shadow: 0px 3px 15px rgba(0,0,0,.16);
    }

    &:hover img {
        transform: scale(1.1);
    }

    & .titleCard {
        @media (min-width: 768px) {
            min-height: 110px;
        }

        @media(min-width: 1366px) {
            margin-top: 0;
            margin-bottom: 12px;
            min-height: 84px;
        }
    }

    @media (min-width: 768px) {
        max-width: 100%;
    }
`;

export const CardImage = styled.div`
    height: 180px;
    overflow: hidden;

    & img {
        object-fit: cover;
        transition: 0.3s ease-out
    }

    @media(min-width: 768px) {
        height: 145px;
    }

    @media(min-width: 1366px) {
        height: 245px;
    }
`;