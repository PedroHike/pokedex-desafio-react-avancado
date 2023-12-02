import { ThemeProvider } from './contexts/theme-context.js';
import { Body } from './components/body/index.js';



function App() {
    return (
        <ThemeProvider>
          <Body/>
        </ThemeProvider>
    )
}

export default App;
