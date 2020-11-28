import React, { useEffect } from 'react';

import { Wrapper } from './styles';
import { movieApi } from 'api';

type Props = {
   title: string;
};

const Test: React.FC<Props> = (props) => {
   const { title } = props;

   const testFunction = async () => {
      try {
         let data = await movieApi.nowPlaying();
         console.log(data);
      } catch (e) {
         console.log({ e });
      }
   };

   useEffect(() => {
      testFunction();
   }, []);

   return (
      <Wrapper>
         <div>{title}</div>
      </Wrapper>
   );
};

export default Test;
