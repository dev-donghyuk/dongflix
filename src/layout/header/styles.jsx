import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(20, 20, 20, 1);
    & ul {
        display: flex;
        & li {
            & a {
                display: block;
                width: 80px;
                height: 60px;
                line-height: 60px;
                color: #fff;
                text-align: center;
                font-size: 14px;
                border-bottom: 4px solid #000;
                box-sizing: border-box;
                transition: all 0.4s ease;
            }
            &.On a {
                border-bottom: 4px solid #27ae60;
            }
        }
    }
`;
export default Wrapper;
