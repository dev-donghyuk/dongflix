import styled from "styled-components";

export const Image = styled.div`
  background: url(${(props) => `https://image.tmdb.org/t/p/w200${props.bgUrl}`})
    center center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  cursor: pointer;
  & .Image_Wrap {
    margin-bottom: 5px;
  }
  & .Image {
    position: relative;
    height: 250px;
    border-radius: 4px;
    transition: all 0.4s ease;
    & .Text_Box {
      position: absolute;
      left: 0;
      top: 50px;
      z-index: 99999;
      width: 100%;
      text-align: center;
      opacity: 0;
      transition: all 0.4s ease;
      & .Title {
        margin-bottom: 3px;
        color: #000;
        font-size: 14px;
        font-weight: bold;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.09);
      }
      & .Year {
        padding-top: 15px;
        color: #000;
        font-size: 14px;
        color: #000;
        font-weight: bold;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.09);
      }
    }
    & .Rating {
      position: absolute;
      left: 50%;
      bottom: 10px;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: bold;
      opacity: 0;
      color: #000;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.7);
      opacity: 0;
      transition: all 0.4s ease;
      border-radius: 4px;
      box-sizing: border-box;
    }
    &:hover .Text_Box {
      opacity: 1;
    }
    &:hover .Rating {
      opacity: 1;
    }
    &:hover::before {
      opacity: 1;
    }
  }
`;
