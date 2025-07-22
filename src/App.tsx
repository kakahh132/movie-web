import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Search from "./Components/Search"
import "./App.css";
import Watchlist from "./Components/Watchlist";
import Home from "./Components/Home";
import Login from "./Components/Login";

import Footer from "./Components/Footer";
import SignUp from "./Components/Signup";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
         <Route path="/Footer" element={<Footer />} />
          <Route path="/Signup" element={<SignUp />} />
       <Route path="/Login" element={<Login />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Watchlist" element={<Watchlist/>} />
        <Route path="/Home" element={<Home/>} />
        
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;