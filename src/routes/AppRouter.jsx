import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"
import { Layout } from "../pages/Layout/Layout"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/"  element={<Layout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
        </Routes>
    )
}
