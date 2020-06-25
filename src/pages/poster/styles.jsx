import styled from "styled-components";

export const Image = styled.div`
  background: url(${(props) => `${props.bgUrl}`}) center center;
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
      opacity: 0;
      text-align: center;
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
      left: 0;
      bottom: 10px;
      width: 100%;
      opacity: 0;
      padding: 0 10px;
      box-sizing: border-box;
      & .Star {
        position: relative;
        display: block;
        width: 110px;
        height: 20px;
        margin: 0 auto;
        background: url("/images/star1.png") no-repeat;
      }
      & .Star_Cover {
        position: absolute;
        left: 0px;
        top: 0;
        display: block;
        width: 0;
        height: 20px;
        background: url("/images/star11.png") no-repeat;
      }
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
