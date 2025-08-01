import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Search from "./Components/Search"
import "./App.css";
import Watchlist from "./Components/Watchlist";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

function App() {
  return (
    <Router>
    
       
      <Routes>
        <Route path="/Header" element={<Header />} />
         <Route path="/Footer" element={<Footer />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Watchlist" element={<Watchlist/>} />
        <Route path="/Home" element={<Home/>} />
         <Route path="/" element={<Hero/>} />
        
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;