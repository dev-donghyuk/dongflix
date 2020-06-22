import styled from "styled-components";

const Wrapper = styled.div`
  padding: 60px 20px;

  & .Box_Wrap {
    padding-top: 60px;
    & > div {
      padding-bottom: 40px;
      & > h2 {
        padding-bottom: 40px;
        color: #fff;
      }
      & > span {
        display: inline-block;
        width: 20%;
      }
    }
  }
`;
export default Wrapper;
