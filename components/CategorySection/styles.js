import styled from 'styled-components'

export const Section = styled.section`
    & {
        .postCard {
            padding: 12px 0 9px;
            border-bottom: 1px solid #c4c4c4;
            margin-bottom: 20px;

            &:last-child {
                border-bottom: none;
            }

            @media(min-width: 768px) {
                display: flex;
                flex-direction: row;
            }

            @media(min-width: 1366px) {
                margin-bottom: 0;
            }

            .cardImage {
                height: 145px;
                width: 217px;
                overflow: hidden;

                @media (min-width: 1366px) {
                    display: none;
                }
            }

            .cardContent {
                width: 100%;
            }

            .metasWrapper {
                border-top: none;

                @media (min-width: 1366px) {
                    padding-top: 0;
                }

                div {
                    width: max-content;
                }
            }
        }
    }
`;

export const PostWrapper = styled.div`
    @media(min-width: 1366px) {
        width: calc(100% - 644px);
    }
`;

export const ImagesPostsWrapper = styled.div`
    @media(min-width: 1366px) {
        display: flex;
        position: relative;
        justify-content: space-between;
    }
`;

export const Thumbnails = styled.div`
    display: none;

    @media(min-width: 1366px) {
        display: block;
        position: relative;

        .thumbnailWrapper {
            position: absolute;
            left: 0;
            top: 0;
            opacity: 0;
            transition: opacity 0.3s ease-out;

            &.active {
                position: relative;
                opacity: 1;
            }
        }
    }
`;