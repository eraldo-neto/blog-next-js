import styled from 'styled-components'

export const Section = styled.section`
    background-color: #efefef;
    padding-top: 70px;
    padding-bottom: 67px;
    transition: background 0.3s ease-out;

    @media(min-width: 768px) {   
        padding-top: 60px;
        padding-bottom: 60px;
    }

    @media(min-width: 1355px) {   
        padding-top: 100px;
        padding-bottom: 100px;
        position: relative;
        overflow: hidden;

        &.specialBackground {
            background: linear-gradient(90deg,rgba(72,228,255,.4) 0%,rgba(0,141,244,.4) 51%);
        }
    }

    & {
        .postCard {
            margin-bottom: 20px;

            @media(min-width: 1366px) {
                width: calc(( 100% - 68px ) / 3);
                margin-right: unset;
                margin-left: 0;
                position: relative;
                z-index: 2;
            }
        }
    }
`;

export const PostWrapper = styled.div`
    @media(min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;