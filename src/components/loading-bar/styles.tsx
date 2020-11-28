import styled from 'styled-components';

const Wrapper = styled.div`
   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   z-index: 2500;
   & .progress_bar {
      position: relative;
      width: 100%;
      & > div {
         background: #27ae60;
      }
   }
   & .click_block {
      width: 100%;
      height: 100vh;
   }
`;
export default Wrapper;
