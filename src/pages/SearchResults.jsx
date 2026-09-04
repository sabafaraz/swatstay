import { useMemo, useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import { useSearchParams, useNavigate } from "react-router-dom";
import HotelCard from "../components/HotelCard";
import hotels from "../data/hotels";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

  function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const mapRef = useRef(null);

  useEffect(() => {
    const loadMap = async () => {
      setOptions({
        key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      });

      const { Map } = await importLibrary("maps");

      new Map(mapRef.current, {
        center: { lat: 35.2227, lng: 72.4258 },
        zoom: 10,
      });
    };

    loadMap();
  }, []);

  const handleSearch = (data) => {
  const params = new URLSearchParams();
  params.set("destination", data.destination || "Swat");
  params.set("checkIn", data.checkIn || "");
  params.set("checkOut", data.checkOut || "");
  params.set("adults", data.adults);
  params.set("children", data.children);
  params.set("rooms", data.rooms);

  window.location.href = `/search?${params.toString()}`;
};

const destination =
  searchParams.get("destination") || "Swat";

  const [maxPrice, setMaxPrice] = useState(20000);
  const [minRating, setMinRating] = useState(0);
  const [propertyType, setPropertyType] = useState("All");

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      const hotelPrice = Number(
        String(hotel.price).replace(/,/g, "")
      );

      const matchesDestination =
        destination.toLowerCase() === "swat" ||
        hotel.destination
          .toLowerCase()
          .includes(destination.toLowerCase()) ||
        hotel.location
          .toLowerCase()
          .includes(destination.toLowerCase());

      const matchesPrice = hotelPrice <= maxPrice;

      const matchesRating = hotel.rating >= minRating;

      return (
        matchesDestination &&
        matchesPrice &&
        matchesRating
      );
    });
  }, [destination, maxPrice, minRating]);

  const handleHotelClick = (hotel) => {
    navigate(`/hotel/${hotel.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

{/* Search Box Area */}
<div className="bg-gray-100 px-5 sm:px-8 lg:px-8 pt-10 pb-10">
  <div className="max-w-6xl mx-auto">

    <SearchBox
      onSearch={(data) => {
        console.log(data);
      }}
    />

  </div>
</div>

     

      {/* Quick Filters */}
<div className="bg-white border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-6 py-3">

    <div className="flex gap-2 overflow-x-auto">

      <button className="px-4 py-2 rounded-full bg-[#00AEEF] text-white
                         text-sm font-semibold whitespace-nowrap">
        🔥 Hot deals
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        🏨 Hotels
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        ⭐ Rating 8.0+
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        📍 Near city center
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        🏖️ Beach
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        🍳 Breakfast included
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        🏊 Pool
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        📶 WiFi
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        ✓ Free cancellation
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        🏝️ Resort
      </button>

      <button className="px-4 py-2 rounded-full border border-gray-300
                         text-sm whitespace-nowrap hover:bg-gray-100">
        🏠 Serviced apartment
      </button>

    </div>

  </div>
</div>

      {/* Main Content */}
       <main className="w-full px-0 py-0">

       <div className="grid grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)_420px] gap-0">

          {/* Filters */}
           <aside className="bg-white border-r border-gray-200 p-5 min-h-[calc(100vh-220px)] overflow-y-auto">

            <h2 className="text-lg font-bold text-gray-900">
              Filters
            </h2>

            {/* Price */}
            <div className="mt-6">

              <h3 className="font-semibold text-gray-800">
                Price per night
              </h3>

              <input
                type="range"
                min="2000"
                max="20000"
                step="500"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
                className="w-full mt-4"
              />

              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>PKR 2,000</span>
                <span>PKR {maxPrice.toLocaleString()}</span>
              </div>

            </div>

            {/* Rating */}
            <div className="mt-7">

              <h3 className="font-semibold text-gray-800">
                Guest rating
              </h3>

              <select
                value={minRating}
                onChange={(e) =>
                  setMinRating(Number(e.target.value))
                }
                className="w-full mt-3 border border-gray-300
                           rounded-lg px-3 py-2"
              >
                <option value="0">Any rating</option>
                <option value="4">4+ Excellent</option>
                <option value="4.5">4.5+ Excellent</option>
              </select>

            </div>

            {/* Property Type */}
            <div className="mt-7">

              <h3 className="font-semibold text-gray-800">
                Property type
              </h3>

              <select
                value={propertyType}
                onChange={(e) =>
                  setPropertyType(e.target.value)
                }
                className="w-full mt-3 border border-gray-300
                           rounded-lg px-3 py-2"
              >
                <option>All</option>
                <option>Hotels</option>
                <option>Resorts</option>
                <option>Apartments</option>
              </select>

            </div>

          </aside>

          {/* Hotel Results */}
          <section className="bg-white px-5 py-5 min-w-0">

          <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4">

              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Hotels in {destination}
                </h2>

                <p className="text-gray-500 mt-1">
                  {filteredHotels.length} hotels found
                </p>
              </div>

            </div>

            {filteredHotels.length === 0 ? (

              <div className="bg-white rounded-2xl p-10 text-center">
                <h3 className="text-xl font-bold">
                  No hotels found
                </h3>

                <p className="text-gray-500 mt-2">
                  Try another destination or increase your price range.
                </p>
              </div>

            ) : (

              <div className="space-y-5">

                {filteredHotels.map((hotel) => (

                  <div
                    key={hotel.id}
                    onClick={() => handleHotelClick(hotel)}
                    className="cursor-pointer"
                  >
                    <HotelCard hotel={hotel}
                    onHotelClick={handleHotelClick}
                     variant="horizontal" />
                  </div>

                ))}

              </div>

            )}

          </section>
         {/* Google Map */}
         <aside className="hidden lg:block border-l border-gray-200">
  <div className="sticky top-0">
    <div
      ref={mapRef}
      className="w-full h-[calc(100vh-220px)] overflow-hidden"
    />
  </div>
</aside>
          

        </div>

      </main>

    </div>
  );
}

export default SearchResults;