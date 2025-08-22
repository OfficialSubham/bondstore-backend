import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Login from "./Pages/Login";
import Container from "./components/container";
import Footer from "./components/footer";
import AllProducts from "./Pages/AllProducts";
import Loading from "./components/loading";
import Alert from "./components/alert";
import AllTypeOfProducts from "./Pages/AllTypeOfProducts";
import EditProduct from "./Pages/EditProduct";
function App() {
  return (
    <div className="bg-neutral-200 min-h-screen w-full relative ">
      <Loading loading={false} />
      <Alert />
      <Router>
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/yourproducts" element={<AllProducts />} />
              <Route
                path="/products/:category"
                element={<AllTypeOfProducts />}
              />
              <Route path="/product/:id" element={<EditProduct />} />
            </Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
