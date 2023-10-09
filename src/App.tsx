import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// routing
import Routes from 'src/routes';
// defaultTheme
import themes from 'src/themes';
// project imports
import NavigationScroll from 'src/layout/NavigationScroll';


// ==============================|| APP ||============================== //
const queryClient = new QueryClient()

const App = () => {
  const customization = useSelector((state: any) => state.customization);

  return (
    <QueryClientProvider client={queryClient}> 
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
    </QueryClientProvider>
  );
};

export default App;
