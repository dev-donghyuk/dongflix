import styled from 'styled-components';

const Wrapper = styled.div`
    * {
        transition: all 0.4s;
    }
    & .Box_Wrap {
        padding-top: 60px;
        & .Poster_Wrap {
            width: 8.333%;
            padding: 4px;
            box-sizing: border-box;
        }
        & > div {
            &:first-child {
                & > h2 {
                    padding: 20px 0;
                }
            }
            & > h2 {
                padding: 16px 0 20px;
                text-indent: 4px;
                color: #fff;
            }
            & > span {
                display: inline-block;
                width: 20%;
            }
        }
    }
    @media (max-width: 1756px) {
        & .Box_Wrap {
            & .Poster_Wrap {
                width: 9.09%;
            }
        }
    }
    @media (max-width: 1610px) {
        & .Box_Wrap {
            & .Poster_Wrap {
                width: 10%;
            }
        }
    }
    @media (max-width: 1462px) {
        & .Box_Wrap {
            & .Poster_Wrap {
                width: 11%;
            }
        }
    }
    @media (max-width: 1315px) {
        & .Box_Wrap {
            & .Poster_Wrap {
                width: 12.5%;
            }
        }
    }
    @media (max-width: 1170px) {
        & .Box_Wrap {
            & .Poster_Wrap {
                width: 14.285%;
            }
        }
    }
    @media (max-width: 1025px) {
        & .Box_Wrap {
            & .Poster_Wrap {
                width: 16.666%;
            }
        }
    }
    @media (max-width: 876px) {
        & .Box_Wrap {
            & .Poster_Wrap {
                width: 20%;
            }
        }
    }
    @media (max-width: 730px) {
        & .Box_Wrap {
            & .Poster_Wrap {
                width: 25%;
            }
        }
    }
    @media (max-width: 584px) {
        & .Box_Wrap {
            & .Poster_Wrap {
                width: 33.333%;
            }
        }
    }
`;
export default Wrapper;
