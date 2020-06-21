import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 60px 20px;
    & .Search_Form {
        width: 100%;
        padding-top: 20px;
        & input {
            width: 100%;
            padding: 10px;
            font-size: 28px;
            color: rgba(255, 255, 255, 1);
            background: none;
            border: none;
            outline: none;
            &::placeholder {
                color: rgba(255, 255, 255, 0.6);
            }
        }
    }
    & .Box_Wrap {
        padding-top: 60px;
        & > div {
            padding-bottom: 40px;
            & h2 {
                padding-bottom: 40px;
                color: #fff;
            }
            & span {
                display: inline-block;
                width: 20%;
            }
        }
    }
`;
export default Wrapper;
