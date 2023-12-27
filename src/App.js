import React from 'react';
import { ThemeProvider } from './contexts/theme-context.js';
import { AppRoutes } from './components/app-routes/app-routes.js';


function App() {

    return (
        <ThemeProvider>
          <AppRoutes/>
        </ThemeProvider>
    )
}

export default App;
