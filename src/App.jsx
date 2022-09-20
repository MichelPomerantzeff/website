import "./App.css"
import Announcement from "./components/Announcement";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart";
import Food from "./pages/Food";
import Drinks from "./pages/Drinks"
import Dessert from "./pages/Dessert"
import Combos from "./pages/Combos"
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalState";

function App() {

  return (
    <Router>
      <Announcement />
      <GlobalProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/food" element={<Food />} />
        </Routes>
        <Routes>
          <Route path="/drinks" element={<Drinks />} />
        </Routes>
        <Routes>
          <Route path="/dessert" element={<Dessert />} />
        </Routes>
        <Routes>
          <Route path="/combos" element={<Combos />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </GlobalProvider>
      <Footer />

    </Router>
  )
}

export default App;
