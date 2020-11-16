import styled from 'styled-components'

export const Section = styled.section`
    @media(min-width: 768px) {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    & {
        .postCard {
            margin-bottom: 25px;

            img {
                transition: .3s linear;
            }

            &:hover {
                border-color: #7a1ea1;

                img {
                    transform: scale(1.1);
                }
            }
        }

        .cardContent {
            justify-content: start;
            padding: 12px 0 0;
            min-height: 0;

            @media(min-width: 768px) {
                padding-top: 0;
                width: calc(100% - 156px);
            }

            @media(min-width: 1366px) {
                width: calc(100% - 288px);
            }

            svg {
                min-width: 15px;
                min-height: 15px;

                @media(min-width: 768px) {
                    min-width: 18px;
                    min-height: 18px;
                }
            }
        }

        .metasWrapper {
            border-top: none;
        }
    }
`;

export const Banner = styled.div`
    @media(min-width: 768px) {
        position: -webkit-sticky;
        position: sticky;
        right: 0;
        top: 163px;
        float: right;
        width: 216px;
        height: 250px;
    }

    @media(min-width: 1366px) {
        height: 403px;
        width: 379px;
        top: 153px;
    }
`;

export const BannerImg = styled.div`
    height: 314px;
    max-width: 360px;
    width: 100%;
    position: relative;
    margin: 0 auto;

    & img {
        object-fit: cover;
    }

    @media(min-width: 768px) {
        height: 250px;
    }

    @media(min-width: 1366px) {
        height: 403px;
    }
`;

export const TitlePostsWrapper = styled.div`
    @media(min-width: 768px) {
        width: calc(100% - 244px);
    }

    @media(min-width: 1366px) {
        width: calc(100% - 429px);
    }
`;