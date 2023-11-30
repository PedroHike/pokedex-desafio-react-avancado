import { ThemeProvider } from './contexts/theme-context.js';
import { Header } from './components/header/header.js';
import { CardsList } from './components/card/card.js';



function App() {
    return (
        <ThemeProvider>
          <Header/>
          <CardsList/>
        </ThemeProvider>
    )
}

export default App;
