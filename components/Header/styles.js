import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100%;
    min-height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 15;
    padding-left: 24px;
    padding-right: 24px;
    position: fixed;

    @media(min-width: 768px) {
        padding-left: 48px;
        padding-right: 48px;
        min-height: 70px;
    }

    @media(min-width: 1366px) {
        padding-left: 96px;
        padding-right: 96px;
    }
`;

export const BurguerIcon = styled.span`
    display: block;
    width: 26px;
    height: 3px;
    outline: 1px solid transparent;
    background-color: #fff;
    transition-property: background-color,transform;
    transition-duration: .3s;
    position: relative;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    user-select: none;

    &::after,
    &::before {
        position: absolute;
        content: "";
        display: block;
        width: 26px;
        height: 3px;
        outline: 1px solid transparent;
        background-color: #fff;
        transition-property: background-color,transform;
        transition-duration: .3s;
    }

    &::before {
        top: -7px;
    }

    &::after {
        top: 7px;
    }

    &.open {
        background-color: transparent;
        outline: none;

        &::before {
            transform: translateY(7px) rotate(45deg);
        }

        &::after {
            transform: translateY(-7px) rotate(-45deg);
        }
    }
`;

export const SidebarMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 76px 0;
    box-sizing: border-box;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    background-color: #0f0f0f;
    z-index: 5;

    &.open {
        transform: translateX(0);
    }

    @media(min-width: 768px) {
        max-width: 439px;
        padding: 32px 0 32px 48px;
        top: 70px;
        height: calc(100% - 70px);
    }
`;

export const MenuItem = styled.a`
    box-sizing: border-box;
    width: 100%;
    font-size: 1.25rem;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    transition: 150ms linear;
    text-decoration: none;
    display: block;
`;

export const BackgroundHeader = styled.div`
    width: 100%;
    height: 56px;
    top: 0;
    transform: translateY(-110%);
    position: fixed;
    background-color: #0f0f0f;
    transition: transform 0.3s ease-out;

    &.translate {
        transform: translateY(0);
    }

    @media(min-width: 768px) {
        min-height: 70px;
    }
`;

export const DynamicSearch = styled.div`
    transform: translateY(-330px);
    transition: transform .3s ease-out;
    position: fixed;
    top: 0;
    background-color: #0f0f0f;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 0;
    padding: 100px 24px 50px 24px;
    display: none;

    &.open {
        transform: none;
    }

    @media (min-width: 1440px) {
        padding-left: calc(( 100% - 1174px ) / 2);
        padding-right: calc(( 100% - 1174px ) / 2);
    }

    @media (min-width: 1366px) {
        padding-left: 96px;
        padding-right: 96px;
    }

    @media (min-width: 768px) {
        padding-left: 48px;
        padding-right: 48px;
        display: block;
    }
`;

export const OverlayBackground = styled.div`
    position: fixed;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    display: none;

    &.show {
        display: block;
    }
`;