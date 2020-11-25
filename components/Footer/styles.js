import styled from 'styled-components'

export const Menu = styled.div`
    @media (min-width: 768px) {
        &:not(.contactMenu) {
            margin-right: 20px;
        }
    }

    & p {
        font-weight: 500;
        margin-bottom: 10px;
        text-transform: uppercase;
        color: #fff;

        @media (min-width: 768px) {
            margin-bottom: 15px;
        }

        @media (min-width: 1366px) {
            margin-bottom: 20px;
        }
    }

    & ul {
        list-style: none;
        padding: 0;
        margin: 0 0 15px;

        @media (min-width: 768px) {
            margin-bottom: 0;
        }
    }
`;

export const MenuItem = styled.a`
    display: block;
    text-decoration: none;
    color: #fff;
    font-family: "Helvetica";
    font-weight: 500;
    padding-bottom: 5px;

    @media (min-width: 1366px) {
        margin-bottom: 5px;

        &.contactText {
            width: 230px;
        }
    }
`;

export const Copyright = styled.div`
    padding: 14px 0;
    background-color: #131313;
    text-align: center;
    margin-left: -24px;
    margin-right: -24px;

    @media (min-width: 768px) {
        width: calc(100% + 96px);
        margin-left: -48px;
        margin-right: -48px;
    }

    @media (min-width: 1366px) {
        margin: 0;
        width: calc(100% + 192px);
        transform: translateX(-96px);
    }

    @media (min-width: 1440px) {
        width: calc(100vw - 15px);
        transform: translateX(calc(( ( 100% - 1174px ) / 2 ) * -1));
    }

    & p {
        font-family: "Helvetica";
        font-weight: 500;
        color: #fff;
    }
`;

export const MenuWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 730px;
        margin: 0 auto 35px;
    }

    @media (min-width: 1366px) {
        justify-content: space-between;
        max-width: none;
    }
`;

export const FooterWrapper = styled.footer`
    background-color: #202020;
    padding-top: 40px;

    @media (min-width: 768px) {
        padding-top: 25px;
    }

    @media (min-width: 1366px) {
        padding-top: 50px;
    }
`;

export const SocialMidias = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: 1366px) {
        width: 160px;
        margin: 0 auto;
    }

    & a {
        text-decoration: none;
        
        svg {
            margin-right: 15px;
        }
    }
`;

export const Logo = styled.div`
    margin-bottom: 45px;

    @media (min-width: 768px) {
        margin-right: 20px;
    }
`;