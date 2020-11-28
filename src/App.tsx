import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import Test from './page/test';

const App: React.FC = () => {
   return (
      <ThemeProvider theme={theme}>
         <Test title={'test'} />
      </ThemeProvider>
   );
};

export default App;
