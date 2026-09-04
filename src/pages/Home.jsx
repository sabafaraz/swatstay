import {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RecentlyViewed from "../components/RecentlyViewed";
import HotHotelDeals from "../components/HotHotelDeals";
import PopularSearches from "../components/PopularSearches";
import GreatDeal from "../components/GreatDeal";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import AppPromotion from "../components/AppPromotion";
import BookingSites from "../components/BookingSites";
import MemberPrices from "../components/MemberPrices";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
  function Home() {
  const navigate =useNavigate();
  const [searches, setSearches] = useState(() => {
  const savedSearches = localStorage.getItem("recentSearches");

  return savedSearches ? JSON.parse(savedSearches) : [];
});
  const [recentHotels, setRecentHotels] = useState([]);

    useEffect(() => {
  const savedHotels = localStorage.getItem("recentHotels");

  if (savedHotels) {
    setRecentHotels(JSON.parse(savedHotels));
  }
}, []);

    const handleHotelClick = (hotel) => {
  setRecentHotels((prev) => {
    const updated = [
      hotel,
      ...prev.filter((item) => item.name !== hotel.name),
    ];

    localStorage.setItem("recentHotels", JSON.stringify(updated));

    return updated;
  });
};
   const handleSearch = (searchData) => {
  console.log("Search clicked:", searchData);

  setSearches((prev) => {
    const updated = [
      searchData,
      ...prev,
    ];

    localStorage.setItem(
      "recentSearches",
      JSON.stringify(updated)
    );

    return updated;
  });

  const destination = searchData.destination || "Swat";

  navigate(
    `/search?destination=${encodeURIComponent(destination)}`
  );
};
return (
    <div className="bg-gray-50 min-h-screen">

      {/* Navbar - outside the card */}
      <Navbar />

      {/* Hero + Search + Booking Sites Card */}
      <section className="w-full px-4 md:px-8 mt-13">

        <div className="bg-gray-100  px-6 md:px-12 py-10">

          {/* Hero Text */}
          <div className="text-left pl-8">

            <p className="text-[#00AEEF] font-bold text-lg mb-5">
              Explore Swat Valley
            </p>

            <h1 className="text-4xl md:text-4xl font-extrabold text-gray-900">
              Discover the Beauty of Swat
            </h1>

          </div>

          {/* Search Box */}
          <div className="mt-15">
           <SearchBox
     onSearch={handleSearch}/>
          </div>

          {/* Booking Sites */}
          <div className="mt-10">
            <BookingSites />
          </div>

        </div>

      </section>

      {/* Other sections - outside the card */}
      <RecentlyViewed searches={searches} recentHotels={recentHotels} />

      <HotHotelDeals  onHotelClick={handleHotelClick}/>

   
          <PopularSearches />
          <GreatDeal />
              <AppPromotion />
              <MemberPrices />
                  <Contact />
                    <Footer />

    </div>
  );
}

export default Home;