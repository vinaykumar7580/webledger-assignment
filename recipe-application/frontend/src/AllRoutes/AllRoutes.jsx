import {Routes, Route} from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Register from "../Pages/Register"
import Product from "../Pages/Product"
import ProductDetails from "../Pages/ProductDetails"
import Login from "../Pages/Login"


function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
    )
}
export default AllRoutes