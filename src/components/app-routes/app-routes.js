import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../home"
import { PokemonDetails } from "../pokemon-details"

export const AppRoutes = () => (
    <BrowserRouter basename="/pokedex-desafio-react-avancado">
        <Routes>
            <Route exact path='/pokedex-desafio-react-avancado' element={<HomePage/>}/>
            <Route exact path='/pokemon/:id' element={<PokemonDetails/>}/>
        </Routes>
    </BrowserRouter>
)
