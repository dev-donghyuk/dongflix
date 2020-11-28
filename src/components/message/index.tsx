import React from 'react';
import Wrapper from './styles';

type MessageType = {
   text: string,
};

const Message: React.FC<MessageType> = ({ text }) => {
   return (
      <Wrapper>
         <h2>{text}</h2>
      </Wrapper>
   );
};

export default Message;
