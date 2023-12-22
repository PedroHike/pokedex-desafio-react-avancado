import React from 'react';
import { ThemeProvider } from './contexts/theme-context.js';
import { Body } from './components/body/index.js';
import { AppRoutes } from './components/app-routes/app-routes.js';
import { Pokemon } from './components/card/index.js';


function App() {

    return (
        <ThemeProvider>
          <Pokemon/>
        </ThemeProvider>
    )
}

export default App;
