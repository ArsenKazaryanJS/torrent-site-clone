import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage/HomePage"
import { Layout } from "../pages/Layout/Layout"
import { CategoryPage } from "../pages/CategoryPage/CategoryPage"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/"  element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/category" element={<CategoryPage/>}/>
            </Route>
        </Routes>
    )
}
