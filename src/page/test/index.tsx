import React from 'react';
import { Wrapper } from './styles';

interface Props {
   title: string;
}

const Test: React.FC<Props> = (props) => {
   const { title } = props;
   return (
      <Wrapper>
         <div>{title}</div>
         <img src="/images/notVideo.jpg" alt="" />
      </Wrapper>
   );
};

export default Test;
