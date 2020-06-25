import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  filter: blur(3px);
  opacity: 0.5;
  background: url(${(props) => `${props.bgUrl}`}) center center;
  background-size: cover;
`;

export const Poster = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(props) => `${props.bgUrl}`}) center center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 60px);
  & .Detail {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 40px;
    box-sizing: border-box;
    & .Text {
      & > div {
        height: 100%;
        & > div {
          & h2 {
            font-size: 32px;
            font-weight: bold;
            color: #fff;
            text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
          }
          & h3 {
            padding: 20px 0 40px;
          }
        }
      }
    }
  }
`;
