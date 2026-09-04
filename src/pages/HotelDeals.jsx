
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import hotels from "../data/hotels";
import HotelCard from "../components/HotelCard";
import Navbar from "../components/Navbar";
import { useRef } from "react";
function HotelDeals() {
  const sliderRef = useRef(null);
  const scrollLeft = () => {
  sliderRef.current.scrollBy({
    left: -300,
    behavior: "smooth",
  });
};

const scrollRight = () => {
  sliderRef.current.scrollBy({
    left: 300,
    behavior: "smooth",
  });
};
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      {/* Header */}
      <div className="bg-sky-100 border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Let's find your great deal
          </h1>

          <p className="text-gray-600 mt-1">
            Discover great hotel deals in Swat Valley
          </p>
        </div>
      </div>

      {/* Hotel Deals */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex justify-between items-center mb-6">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Hot Hotel Deals Right Now
            </h2>

            <p className="text-gray-500 mt-1">
              Great stays at great prices
            </p>
          </div>

          <span className="text-blue-600 font-semibold">
            {hotels.length} hotels
          </span>

        </div>

        {/* Hotel Cards */}
        <div className="relative">

  {/* Left Arrow */}
  <button
    onClick={scrollLeft}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10
               w-10 h-10 bg-white border border-gray-300
               rounded-full shadow-md hover:bg-gray-100"
  >
    ←
  </button>

  {/* Hotel Slider */}
  <div
    ref={sliderRef}
    className="flex gap-5 overflow-x-auto scroll-smooth
               px-12 pb-4 scrollbar-hide"
  >

    {hotels.map((hotel) => (
      <div
        key={hotel.id}
        className="min-w-[280px] flex-shrink-0"
      >
        <HotelCard hotel={hotel} />
      </div>
    ))}

  </div>


  {/* Right Arrow */}
  <button
    onClick={scrollRight}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10
               w-10 h-10 bg-white border border-gray-300
               rounded-full shadow-md hover:bg-gray-100"
  >
    →
  </button>

</div>
 .{/* Deal Tabs */}
<div className="flex gap-8 border-b border-gray-200 mt-6">

  <button
    className="pb-3 font-semibold text-gray-900 border-b-2 border-blue-600"
  >
    All deals
  </button>

  <button
    className="pb-3 font-semibold text-gray-500 hover:text-gray-900"
  >
    Deals nearby
  </button>

</div>

   {/* Deals Below 10000 */}

<section className="mt-8">

  <div className="flex items-center justify-between mb-5">

    <div>
      <h2 className="text-2xl font-bold text-gray-900">
        Deals below PKR 10,000
      </h2>

      <p className="text-gray-500 mt-1">
        Great hotel deals at affordable prices
      </p>
    </div>

    <button className="text-[#00AEEF] font-semibold hover:underline">
      See more →
    </button>

  </div>

  <div className="relative">

    {/* Left Arrow */}
    <button
      onClick={scrollLeft}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                 w-10 h-10 bg-white border border-gray-300
                 rounded-full shadow-md hover:bg-gray-100"
    >
      ←
    </button>

    {/* Cards */}
    <div
      ref={sliderRef}
      className="flex gap-5 overflow-x-auto scroll-smooth
                 px-12 pb-4"
    >

      {hotels
        .filter((hotel) => Number(hotel.price.replace(/,/g, "")) < 10000)
        .map((hotel) => (
          <div
            key={hotel.id}
            className="min-w-[280px] flex-shrink-0"
          >
            <HotelCard hotel={hotel} />
          </div>
        ))}

    </div>

    {/* Right Arrow */}
    <button
      onClick={scrollRight}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                 w-10 h-10 bg-white border border-gray-300
                 rounded-full shadow-md hover:bg-gray-100"
    >
      →
    </button>

  </div>

</section>


    {/* Hotel Deals for the Next 7 Days */}

<section className="mt-10">

  <div className="flex items-center justify-between mb-5">

    <div>
      <h2 className="text-2xl font-bold text-gray-900">
        Hotel Deals for the Next 7 Days
      </h2>

      <p className="text-gray-500 mt-1">
        Find great stays for the coming week
      </p>
    </div>

    <button className="text-[#00AEEF] font-semibold hover:underline">
      See more →
    </button>

  </div>

  <div className="relative">

    {/* Left Arrow */}
    <button
      onClick={scrollLeft}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                 w-10 h-10 bg-white border border-gray-300
                 rounded-full shadow-md hover:bg-gray-100"
    >
      ←
    </button>

    {/* Hotel Cards */}
    <div
      ref={sliderRef}
      className="flex gap-5 overflow-x-auto scroll-smooth
                 px-12 pb-4"
    >

      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="min-w-[280px] flex-shrink-0"
        >
          <HotelCard hotel={hotel} />
        </div>
      ))}

    </div>

    {/* Right Arrow */}
    <button
      onClick={scrollRight}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                 w-10 h-10 bg-white border border-gray-300
                 rounded-full shadow-md hover:bg-gray-100"
    >
      →
    </button>

  </div>

       </section>

  {/* Top Picks with Free Cancellation */}

   <section className="mt-10">

  <div className="flex items-center justify-between mb-5">

    <div>
      <h2 className="text-2xl font-bold text-gray-900">
        Top Picks with Free Cancellation
      </h2>

      <p className="text-gray-500 mt-1">
        Flexible stays you can book with confidence
      </p>
    </div>

    <button className="text-[#00AEEF] font-semibold hover:underline">
      See more →
    </button>

  </div>

  <div className="relative">

    {/* Left Arrow */}
    <button
      onClick={scrollLeft}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                 w-10 h-10 bg-white border border-gray-300
                 rounded-full shadow-md hover:bg-gray-100"
    >
      ←
    </button>

    {/* Hotel Cards */}
    <div
      ref={sliderRef}
      className="flex gap-5 overflow-x-auto scroll-smooth
                 px-12 pb-4"
    >

      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="min-w-[280px] flex-shrink-0"
        >
          <HotelCard hotel={hotel} />
        </div>
      ))}

    </div>

    {/* Right Arrow */}
    <button
      onClick={scrollRight}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                 w-10 h-10 bg-white border border-gray-300
                 rounded-full shadow-md hover:bg-gray-100"
    >
      →
    </button>

  </div>

         </section>

         {/* Looking for a different deal */}
        <section className="max-w-7xl mx-auto px-6 py-12">

  <div className="text-center mb-6">

    <h2 className="text-2xl font-bold text-gray-900">
      Looking for a different deal?
    </h2>

    <p className="text-gray-500 mt-2">
      Search by destination and dates to find more hotel deals.
    </p>

  </div>

  <div className="bg-white rounded-2xl shadow-md p-4">

    <SearchBox
      onSearch={(searchData) => {
        console.log("Hotel deals search:", searchData);
      }}
    />

  </div>

      </section>

   {/* Looking for a different deal */}
<section className="max-w-7xl mx-auto px-6 py-12">

  {/* your search code */}

</section>

{/* Footer */}
<Footer />



</section>

    </div>
  );
}

export default HotelDeals;