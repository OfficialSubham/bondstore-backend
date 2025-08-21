import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ProtectedRoute from "./Pages/ProtectedRoute";
import Login from "./Pages/Login";
import Container from "./components/container";
import Footer from "./components/footer";
function App() {
  return (
    <div className="min-h-screen bg-neutral-200 h-screen w-full relative ">
      <Router>
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
