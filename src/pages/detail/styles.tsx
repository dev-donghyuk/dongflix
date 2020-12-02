import styled from 'styled-components';

type BackdropType = {
   bgUrl: string;
};

export const Backdrop = styled.div<BackdropType>`
   width: 100%;
   height: 100%;
   filter: blur(3px);
   opacity: 0.5;
   background: url(${(props) => `${props.bgUrl}`}) center center;
   background-size: cover;
`;

export const Wrapper = styled.div`
   position: fixed;
   left: 0;
   bottom: 0;
   z-index: 1500;
   width: 100%;
   height: calc(100vh - 61px);
   & .detail {
      position: fixed;
      left: 0;
      top: 59px;
      width: 100%;
      height: 100%;
      & .poster {
         position: absolute;
         left: 0;
         top: 0;
         z-index: 1;
         max-width: 600px;
         width: 100%;
         height: 100%;
         object-fit: cover;
         -webkit-mask-image: -webkit-gradient(
            linear,
            right top,
            left top,
            color-stop(1, rgba(0, 0, 0, 1)),
            color-stop(0.5, rgba(0, 0, 0, 1)),
            color-stop(0, rgba(0, 0, 0, 0))
         );
      }
      & .text {
         position: absolute;
         left: 36%;
         top: 0;
         height: 100%;
         z-index: 2000;
         width: calc(67% - 40px);
         & > div {
            height: 100%;
            & > div {
               & h2 {
                  line-height: 48px;
                  font-size: 32px;
                  font-weight: bold;
                  color: #fff;
                  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
               }
               & h3 {
                  padding: 8px 0 32px;
                  & > span {
                     display: inline-block;
                     margin-right: 24px;
                     color: #fff;
                     text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
                     &.genres {
                        & em {
                           display: inline-block;
                           margin-right: 4px;
                           &.last {
                              margin-right: 0;
                           }
                        }
                     }
                     &:last-child {
                        margin-right: 0;
                     }
                     &.rating {
                        & .star {
                           position: relative;
                           display: block;
                           width: 80px;
                           height: 16px;
                           margin: 0 auto;
                           background: url('/images/star.png') no-repeat left bottom;
                           background-size: 80px;
                        }
                        & .star_cover {
                           position: absolute;
                           left: 0px;
                           top: 0;
                           display: block;
                           width: 0;
                           height: 16px;
                           background: url('/images/star_cover_w.png') no-repeat left bottom;
                           background-size: 80px;
                        }
                     }
                  }
               }
               & .review {
                  display: block;
                  width: 150px;
                  height: 40px;
                  line-height: 36px;
                  color: #fff;
                  font-size: 12px;
                  text-align: center;
                  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
                  border: 2px solid #fff;
                  border-radius: 4px;
                  background: rgba(255, 255, 255, 0.3);
                  cursor: pointer;
                  &:hover {
                     background: rgba(255, 255, 255, 0.5);
                  }
               }
               & p {
                  width: 635px;
                  line-height: 24px;
                  margin-top: 24px;
                  color: rgba(255, 255, 255, 0.8);
                  text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
               }
               & .youtube {
                  margin-top: 24px;
                  & button {
                     width: 32px;
                     height: 23px;
                     background: url('/images/icon/youtube_icon.png') no-repeat;
                     background-size: 32px;
                     border: none;
                     outline: none;
                     cursor: pointer;
                  }
                  & .iframe_wrap {
                     width: 100%;
                     margin-top: 32px;
                     & iframe {
                        width: 100%;
                        height: 100%;
                        max-height: 0px;
                        opacity: 0;
                     }
                  }
                  &.on {
                     & .iframe_wrap {
                        height: 320px;
                        & iframe {
                           max-height: 320px;
                           opacity: 1;
                        }
                     }
                  }
               }
            }
         }
      }
   }
   @media (max-width: 600px) {
      & .detail {
         & .poster {
            -webkit-mask-image: none !important;
         }
         & .text {
            left: 0;
            width: 100%;
            padding: 0 16px;
            text-align: center;
            & > div {
               & > div {
                  width: 100%;
                  & .review {
                     margin: 0 auto;
                  }
                  & > p {
                     width: 100%;
                  }
               }
            }
         }
      }
   }
`;
