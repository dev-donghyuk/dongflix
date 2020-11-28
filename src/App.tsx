import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './redux/redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import LoadingBar from './components/loading-bar';

import Routes from './Routes';

const App: React.FC = () => {
   const reducer = useSelector((state: RootState) => state.reducer);
   return (
      <ThemeProvider theme={theme}>
         {reducer.isLoading && <LoadingBar />}
         <Routes />
      </ThemeProvider>
   );
};

export default App;
