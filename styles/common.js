import styled from 'styled-components'

export const Container = styled.div`
margin-left: 24px;
margin-right: 24px;

@media(min-width: 768px) {
    margin-left: 48px;
    margin-right: 48px;
}

@media(min-width: 1366px) {
    margin-left: 96px;
    margin-right: 96px;
}

@media(min-width: 1440px) {
    margin-left: calc((100vw - 1316px) / 2);
    margin-right: calc((100vw - 1316px) / 2);
}
`

export const PaddingContainer = styled.div`
padding-left: 24px;
padding-right: 24px;

@media(min-width: 768px) {
    padding-left: 48px;
    padding-right: 48px;
}

@media(min-width: 1366px) {
    padding-left: 96px;
    padding-right: 96px;
}

@media(min-width: 1440px) {
    padding-left: calc((100vw - 1316px) / 2);
    padding-right: calc((100vw - 1316px) / 2);
}
`

export const Button = styled.button`
    border: 2px solid #d8d8d8;
    color: #fff;
    padding: 12px 28px 10px;
    margin-bottom: 35px;
    display: inline-block;
    transition: .3s ease-out;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    font-weight: 500;
    text-transform: uppercase;

    &:hover {
        background-color: #d8d8d8;
        border: 2px solid #0f0f0f;
        color: #0f0f0f;
    }

    @media(min-width: 768px) {
        padding: 11px 52px;
    }

    @media(min-width: 1366px) {
        font-size: 16px;
    }
`