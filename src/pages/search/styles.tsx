import styled from 'styled-components';

const Wrapper = styled.div`
   padding: 40px 0px;
   & .search_form {
      width: 100%;
      & input {
         width: 100%;
         padding: 0 8px;
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
`;
export default Wrapper;
