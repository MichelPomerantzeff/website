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
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";

import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { GlobalProvider } from "./context/GlobalState";

import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function App() {

  const promise = loadStripe('pk_test_51Lkc9zLJCDKq1WclAxdNxvoZYM5RxBxxItzQnIGUqQ8FBEk4Pw8kNCwmHT8mFckitwaKTS68LaxfCU3jnMR8H8f100TBUQHObw')

  return (

    <Router>
      <GlobalProvider>



        <Routes>
          <Route path="/"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <Home />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/about"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <About />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/food"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <Food />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/drinks"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <Drinks />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/dessert"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <Dessert />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/combos"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <Combos />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/login"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <Login />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/register"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <Register />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/cart"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <Cart />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/orders"
            element={<AppContainer>
              <Announcement />
              <Navbar />
              <Orders />
              <Footer />
            </AppContainer>} />
        </Routes>

        <Routes>
          <Route path="/payment" element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          } />
        </Routes>

      </GlobalProvider>
    </Router>
  )
}

export default App;
