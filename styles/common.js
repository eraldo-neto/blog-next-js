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