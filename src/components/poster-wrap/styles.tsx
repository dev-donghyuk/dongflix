import styled from 'styled-components';

export const Wrapper = styled.div`
   * {
      transition: all 0.4s;
   }
   & .poster_wrap {
      padding: 40px 0px;
      & .poster {
         width: calc(100% / 12);
         padding: 4px;
      }
      & > div {
         padding-bottom: 40px;
         & > h2 {
            padding-bottom: 40px;
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
      & .poster_wrap {
         & .poster {
            width: calc(100% / 11);
         }
      }
   }
   @media (max-width: 1610px) {
      & .poster_wrap {
         & .poster {
            width: calc(100% / 10);
         }
      }
   }
   @media (max-width: 1462px) {
      & .poster_wrap {
         & .poster {
            width: calc(100% / 9);
         }
      }
   }
   @media (max-width: 1315px) {
      & .poster_wrap {
         & .poster {
            width: calc(100% / 8);
         }
      }
   }
   @media (max-width: 1170px) {
      & .poster_wrap {
         & .poster {
            width: calc(100% / 7);
         }
      }
   }
   @media (max-width: 1025px) {
      & .poster_wrap {
         & .poster {
            width: calc(100% / 6);
         }
      }
   }
   @media (max-width: 876px) {
      & .poster_wrap {
         & .poster {
            width: calc(100% / 5);
         }
      }
   }
   @media (max-width: 730px) {
      & .poster_wrap {
         & .poster {
            width: calc(100% / 4);
         }
      }
   }
   @media (max-width: 584px) {
      & .poster_wrap {
         & .poster {
            width: calc(100% / 3);
         }
      }
   }
`;
