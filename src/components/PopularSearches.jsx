
import SectionContainer from "./SectionContainer";
function PopularSearches() {
  const places = [
    "Hotels in Swat",
    "Hotels in Kalam",
    "Malam Jabba",
    "Bahrain",
    "Mingora",
    "Madyan",
  ];

  return (
    <SectionContainer>

      <div className="mb-6">
        <p className="text-[#00AEEF] font-semibold">
          Explore Swat
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-1">
          Popular searches
        </h2>

        <p className="text-gray-500 mt-2">
          Discover popular places to stay in Swat Valley.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {places.map((place) => (
          <button
            key={place}
            className="group bg-white border border-gray-200
                       rounded-2xl p-5 text-left shadow-sm
                       hover:shadow-lg hover:border-blue-400
                       hover:-translate-y-1
                       transition-all duration-300"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="font-semibold text-gray-800
                              group-hover:text-[#00AEEF] transition">
                  {place}
                </p>

                <p className="text-sm text-gray-500 mt-1">
                  Find hotels & stays
                </p>
              </div>

              <span className="text-xl text-gray-400
                               group-hover:text-[#00AEEF]
                               group-hover:translate-x-1
                               transition">
                →
              </span>

            </div>
          </button>
        ))}

      </div>

    </SectionContainer>
  );
}

export default PopularSearches;