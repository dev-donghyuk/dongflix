import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/redux';
import { Wrapper } from './styles';

type Props = {
   title: string;
};

const Test: React.FC<Props> = (props) => {
   const { title } = props;
   const reducer = useSelector((state: RootState) => state.reducer);
   const dispatch = useDispatch();

   useEffect(() => {
      console.log(reducer);
   }, [reducer]);

   return (
      <Wrapper>
         <button
            onClick={() => {
               dispatch({
                  type: 'SET_IS_LOADING',
                  payload: !reducer.isLoading,
               });
            }}
         >
            asfasfasf
         </button>
         <div>{title}</div>
         <img src="/images/notVideo.jpg" alt="" />
      </Wrapper>
   );
};

export default Test;
