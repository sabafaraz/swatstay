import SectionContainer from "./SectionContainer";

function RecentlyViewed({
  searches = [],
  recentHotels = [],
}) {

  return (
    <SectionContainer>

      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold text-gray-900">
          Recently Viewed
        </h2>

        <button className="text-[#00AEEF] font-medium hover:underline">
          View all →
        </button>
      </div>

      {/* Recent Searches */}
      {searches.length === 0 ? (

        <p className="text-gray-400 text-sm">
          Your recent searches will appear here.
        </p>

      ) : (

        <div className="flex gap-4 overflow-x-auto pb-2">

          {searches.map((search, index) => (

            <div
              key={index}
              className="
                min-w-[250px]
                bg-white
                border border-gray-200
                rounded-xl
                p-4
                shadow-sm
                hover:shadow-md
                transition
              "
            >
              

              {/* Destination */}
              <h3 className="text-lg font-bold text-gray-900">
                {search.destination || "Swat"}
              </h3>

              {/* Dates */}
              <p className="text-sm text-gray-500 mt-2">
                {search.checkIn || "Select date"} →{" "}
                {search.checkOut || "Select date"}
              </p>

              {/* Guests */}
              <p className="text-sm text-gray-500 mt-1">
                {(search.adults || 0) + (search.children || 0)} Guests,{" "}
                {search.rooms || 1} Room
              </p>

            </div>

          ))}

        </div>

      )}

      {/* Recently Viewed Hotels */}
      {recentHotels.length > 0 && (
        <div className="mt-8">

          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Recently Viewed Hotels
          </h3>

          <div className="grid grid-cols-3 gap-5">

            {recentHotels.map((hotel) => (
              <div
                key={hotel.id || hotel.name}
                className="min-w-[250px] bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
              >

                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-32 object-cover"
                />

                <div className="p-4">

                  <h3 className="text-lg font-bold text-gray-900">
                    {hotel.name}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    📍 {hotel.location}
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    ⭐ {hotel.rating}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      )}

    </SectionContainer>
  );
}

export default RecentlyViewed;