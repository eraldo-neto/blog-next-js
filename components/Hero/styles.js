import styled from 'styled-components'

export const HeroCard = styled.div`
    width: calc(100% - 22px);
    margin: 0 auto;
    transform: translateY(80px);
    position: relative;
    white-space: normal;
    max-width: 380px;

    @media (min-width: 768px) {
        max-width: 800px;
        display: flex;
        align-items: center;
        width: calc(100% - 96px);
    }

    @media (min-width: 1366px) {
        max-width: calc(100% - 316px);
        transform: translateY(90px);
        width: 1039px;
    }

    img {
        transition: transform 0.3s ease-out;
    }

    &:hover img {
        transform: scale(1.05);
    }
`;

export const HeroCardContent = styled.div`
    padding: 109px 19px 23px;
    margin-top: -89px;
    color: #fff;
    background-image: linear-gradient(315deg,rgba(122,30,161,.65) 0%,rgba(72,228,255,.65) 100%);
    min-height: 320px;
    box-sizing: border-box;

    @media (min-width: 768px) {
        width: calc(70% - 20px);
        padding: 40px 20px 40px 123px;
        margin-left: -103px;
        margin-top: 0;
        min-height: 272px;
        max-height: 272px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media (min-width: 1366px) {
        padding: 40px 40px 40px 262px;
        margin-left: -222px;
        min-height: 447px;
        max-height: 447px;
        width: 738px;
    }
`;

export const CarouselItem = styled.div`
    height: 543px;
    position: relative;

    @media (min-width: 768px) {
        height: 414px;
    }

    @media (min-width: 1366px) {
        height: 619px;
    }
`;

export const HeroImageContainer = styled.a`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    &::after {
        content: "";
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        background-image: linear-gradient(360deg,rgba(32,32,32,.85) 0%,rgba(0,0,0,.85) 100%);
    }
`;

export const HeroCardImage = styled.a`
    display: block;
    height: 197px;
    width: calc(100% - 26px);
    margin: 0 auto;
    overflow: hidden;
    position: relative;

    @media (min-width: 768px) {
        height: 234px;
        width: 48%;
        margin: 0;
    }

    @media (min-width: 1366px) {
        height: 379px;
        width: 522px;
    }
`;

export const HeroCardCategory = styled.a`
    color: #fff;
    font-family: "helvetica";
    padding-top: 19px;
    padding-bottom: 7px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }

    @media (min-width: 1366px) {
        margin-bottom: 5px;
    }
`;

export const HeroCardTitle = styled.h3`
    font-weight: 500;
    color: #fff;
    font-size: 1.75rem;
    margin-bottom: 10px;
    max-height: 137px;
    display: block;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;

    @media (min-width: 768px) {
        max-height: 156px;
    }

    @media (min-width: 1366px) {
        margin-bottom: 20px;
        max-height: 178px;
    }
`;

export const HeroCardMetas = styled.span`
    font-family: "helvetica";
    font-weight: 500;
    color: #fff;
`;

export const SectionHero = styled.section`
    position: relative;

    .slick-prev,
    .slick-next {
        z-index: 50;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 30px;
        height: 30px;
        transform: initial;
        &:before {
            content: "";
            display: inline-block;
            padding: 7.5px;
            border: solid #fff;
            border-width: 0 2px 2px 0;
        }
    }
    .slick-prev {
        left: 5px;
        &:before {
            transform: rotate(135deg);
        }
    }
    .slick-next {
        right: 5px;
        &:before {
            transform: rotate(-45deg);
        }
    }

    .slick-dots {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);

        li {
            position: relative;
            cursor: pointer;
            min-width: 38px;
            width: 38px;
            height: 4px;
            background-color: transparent;
            padding-bottom: 5px;
            border-radius: 0;
            background-image: linear-gradient(to bottom,#fff 4px,rgba(0,0,0,0) 4px,rgba(0,0,0,0) 100%);

            &.slick-active button {
                background-color: #48e4ff;
            }

            button {
                width: 38px;
                min-width: 38px;
                height: 4px;
                position: relative;
                border-radius: 0;
                display: block;
                padding: 0;

                &::before {
                    display: none;
                }
            }
        }
    }

    @media(min-width: 1366px) {
        .slick-prev {
            left: 40px;
        }
        .slick-next {
            right: 40px;
        }

        .slick-prev,
        .slick-next {
            &:before {
                border-width: 0 4px 4px 0;
            }
        }
    }
`;