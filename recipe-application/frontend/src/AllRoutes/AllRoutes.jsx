import {Routes, Route} from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Product from "../Pages/Product"
import ProductDetails from "../Pages/ProductDetails"
import Login from "../Pages/Login"


function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Dashboard/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:id" element={<ProductDetails/>}/>
        </Routes>
    )
}
export default AllRoutes