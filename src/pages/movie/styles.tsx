import styled from 'styled-components';

const Wrapper = styled.div`
   padding: 40px 0px;
   * {
      transition: all 0.4s;
   }
   & .box_wrap {
      padding-top: 64px;
      & .poster_wrap {
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
      & .box_wrap {
         & .poster_wrap {
            width: calc(100% / 11);
         }
      }
   }
   @media (max-width: 1610px) {
      & .box_wrap {
         & .poster_wrap {
            width: calc(100% / 10);
         }
      }
   }
   @media (max-width: 1462px) {
      & .box_wrap {
         & .poster_wrap {
            width: calc(100% / 9);
         }
      }
   }
   @media (max-width: 1315px) {
      & .box_wrap {
         & .poster_wrap {
            width: calc(100% / 8);
         }
      }
   }
   @media (max-width: 1170px) {
      & .box_wrap {
         & .poster_wrap {
            width: calc(100% / 7);
         }
      }
   }
   @media (max-width: 1025px) {
      & .box_wrap {
         & .poster_wrap {
            width: calc(100% / 6);
         }
      }
   }
   @media (max-width: 876px) {
      & .box_wrap {
         & .poster_wrap {
            width: calc(100% / 5);
         }
      }
   }
   @media (max-width: 730px) {
      & .box_wrap {
         & .poster_wrap {
            width: calc(100% / 4);
         }
      }
   }
   @media (max-width: 584px) {
      & .box_wrap {
         & .poster_wrap {
            width: calc(100% / 3);
         }
      }
   }
`;
export default Wrapper;
