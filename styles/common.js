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

export const SectionTitle = styled.h2`
    font-size: 1.75rem;
    color: #202020;
    margin-bottom: 10px;
    font-weight: 500;
`

export const Separator = styled.h2`
    position: relative;
    height: 1px;
    display: block;
    width: 100%;
    background-color: #202020;
    margin-bottom: 25px;

    &::before {
        content: "";
        height: 5px;
        width: 48px;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        display: block;
        background-color: #7a1ea1;

        @media(min-width: 768px) {
            width: 80px;
        }
    }

    @media(min-width: 768px) {
        margin-bottom: 25px;
    }

    @media(min-width: 1366px) {
        margin-bottom: 40px;
    }
`

export const CategoryCard = styled.a`
    font-family: "Helvetica";
    color: #008df4;
    user-select: none;
    text-decoration: none;
    padding-right: 10px;
    padding-top: 12px;
    min-width: 48px;
`

export const TitleCard = styled.h3`
    margin-top: 10px;
    display: block;
    display: -webkit-box;
    margin-bottom: 15px;
    font-size: 1.25rem;
    font-weight: 500;
    line-height: 1.6;
    color: #202020;
    max-height: 70px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    @media(min-width: 768px) {
        max-height: unset;
    }
`

export const CardMetas = styled.div`
    padding-top: 11px;
    border-top: #c4c4c4 solid 1px;
    display: flex;
    justify-content: space-between;

    @media(min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        min-height: 57px;
    }

    @media(min-width: 1366px) {
        justify-content: space-between;
        flex-wrap: nowrap;
        min-height: unset;
    }
`

export const CardMeta = styled.div `
    display: flex;
    align-items: center;

    & p {
        font-family: "Helvetica";
        font-weight: 500;
        color: #515151;
        margin-left: 8px;
        transform: translateY(2px);
    }

    @media(min-width: 768px) {
        width: 100%;
        margin-bottom: 6px;
    }

    @media(min-width: 1366px) {
        margin-bottom: 0;
        max-width: max-content;
    }
`

export const CardContent = styled.div`
    height: 100%;
    padding: 12px 15px 16px;
    box-sizing: border-box;
    text-decoration: none;
    background-color: #fff;
    min-height: 157px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media(min-width: 1366px) {
        padding: 20px 18px 19px;
    }
`