import styled from "styled-components";

export const Icon = styled.span`
  display: inline-block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: url(${(props) => `/dongflix/images/icon/${props.iconUrl}`});
  background-size: 24px;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 0px;
    height: 24px;
    background: url(${(props) => `/dongflix/images/icon/${props.coverUrl}`});
    background-size: 24px;
    transition: all 0.4s;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background: rgba(20, 20, 20, 1);
  & ul {
    overflow: hidden;
    & li {
      &:nth-child(1) {
        float: left;
      }
      &:nth-child(2) {
        float: left;
      }
      &:nth-child(3) {
        float: right;
      }
      & a {
        position: relative;
        display: block;
        width: 80px;
        height: 60px;
        color: #fff;
        text-align: center;
        /* &::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 4px;
          background: #27ad60;
          transition: all 0.4s ease;
        } */
      }
      /* &.On a::before {
        width: 100%;
      } */
      &.On a .Icon::before {
        width: 24px;
      }
    }
`;
