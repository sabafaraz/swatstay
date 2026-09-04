import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./components/Favorites";
import HotelDeals from "./pages/HotelDeals";
import SearchResults from "./pages/SearchResults";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} /> 
        <Route path="/hotel-deals" element={<HotelDeals />} />
        
        <Route path="/favorites" element={<Favorites />} />
      <Route path ="/search" element={<SearchResults />} />

</Routes>
    </BrowserRouter>
  );
}

export default App;
