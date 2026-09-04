import SectionContainer from "./SectionContainer";
function AppPromotion() {
  return (
    <SectionContainer>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700
                      rounded-3xl overflow-hidden
                      p-8 md:p-12
                      flex flex-col md:flex-row
                      items-center justify-between gap-8
                      hover:shadow-xl transition-all duration-300">

        {/* Left Side */}
        <div className="text-white max-w-xl">

          <p className="text-blue-100 font-semibold mb-2">
            SwatStay App
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Download the SwatStay App
          </h2>

          <p className="mt-4 text-blue-100 leading-relaxed">
            Search hotels, compare prices, and discover the best
            places to stay in Swat Valley—all from your phone.
          </p>

          {/* App Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-7">

            <button
              className="bg-white text-gray-900 px-5 py-3
                         rounded-xl font-semibold
                         hover:bg-gray-100 hover:shadow-lg
                         transition-all duration-300"
            >
              📱 Download App
            </button>

            <button
              className="border border-white/70 text-white
                         px-5 py-3 rounded-xl font-semibold
                         hover:bg-white/10
                         transition-all duration-300"
            >
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side — Phone Preview */}
        <div className="flex justify-center">

          <div className="w-48 h-80 bg-white rounded-[2rem]
                          shadow-2xl p-3
                          hover:-translate-y-2
                          transition-all duration-300">

            <div className="w-full h-full bg-blue-50
                            rounded-[1.5rem]
                            flex flex-col items-center
                            justify-center text-center p-4">

              <div className="text-5xl mb-4">
                🏔️
              </div>

              <h3 className="font-bold text-gray-900">
                SwatStay
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Find your perfect stay
              </p>

              <div className="mt-5 w-full h-2
                              bg-blue-200 rounded-full">
                <div className="w-2/3 h-2 bg-blue-600 rounded-full" />
              </div>

            </div>

          </div>

        </div>

      </div>

    </SectionContainer>
  );
}

export default AppPromotion;