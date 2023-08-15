
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BodyProvider } from "./components/Context";


function App() {
  return (
    <BodyProvider>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProductList" element={<ProductList />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cart" element={<Cart />} />
      <Route exact path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
    </BodyProvider>
  );
}

export default App;
