import { ThemeProvider } from './contexts/theme-context.js';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button.js';



function App() {
    return (
        <ThemeProvider>
          <ThemeTogglerButton/>
        </ThemeProvider>
    )
}

export default App;
