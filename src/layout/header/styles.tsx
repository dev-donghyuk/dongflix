import { type } from 'os';
import styled from 'styled-components';

type IconType = {
   iconUrl: string;
   coverUrl: string;
};

export const Icon = styled.span<IconType>`
   display: inline-block;
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   width: 24px;
   height: 24px;
   background: url(${(props) => `${props.iconUrl}`});
   background-size: 24px;
   &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 0px;
      height: 24px;
      background: url(${(props) => `${props.coverUrl}`});
      background-size: 24px;
      transition: all 0.4s;
   }
`;

export const Wrapper = styled.div`
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   z-index: 2000;
   background: rgba(20, 20, 20, 1);
   & > .header_wrap {
      & > div {
         & a {
            position: relative;
            display: inline-block;
            width: 80px;
            height: 60px;
            color: #fff;
            text-align: center;
            &.on .icon::before {
               width: 24px;
            }
         }
      }
   }
`;
