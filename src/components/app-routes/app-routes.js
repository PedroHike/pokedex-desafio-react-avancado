import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Body } from "../body"

export const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Body/>}/>
            <Route exact path='/:id' element={<Body/>}/>
        </Routes>
    </BrowserRouter>
)