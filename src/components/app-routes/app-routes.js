import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../body"
import { Pokemon } from "../pokemon"

export const AppRoutes = () => (
    <BrowserRouter basename="/desafio-react-avancado">
        <Routes>
            <Route exact path='/' element={<HomePage/>}/>
            <Route exact path='/pokemon/:id' element={<Pokemon/>}/>
        </Routes>
    </BrowserRouter>
)