import React from 'react';
import { ThemeProvider } from './contexts/theme-context.js';
import { AppRoutes } from './components/app-routes/app-routes.js';
import GlobalStyle from './global-style.js';


function App() {

    return (
        <ThemeProvider>
          <GlobalStyle/>
          <AppRoutes/>
        </ThemeProvider>
    )
}

export default App;
