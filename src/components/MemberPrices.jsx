import SectionContainer from "./SectionContainer";
function MemberPrices() {
  return (
    <SectionContainer>

      <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white
                      flex flex-col md:flex-row
                      items-center justify-between gap-8
                      hover:shadow-xl transition-all duration-300">

        {/* Text */}
        <div className="max-w-2xl">

          <p className="text-blue-100 font-semibold mb-2">
            SwatStay Members
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Want access to member prices and perks?
          </h2>

          <p className="mt-4 text-blue-100 leading-relaxed">
            Join SwatStay to discover special hotel prices,
            exclusive deals, and useful travel perks.
          </p>

        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">

          <button
            className="bg-white text-blue-600
                       px-6 py-3 rounded-xl font-semibold
                       hover:bg-blue-50
                       hover:shadow-lg
                       transition-all duration-300"
          >
            Continue as Member
          </button>

          <button
            className="border border-white/70
                       px-6 py-3 rounded-xl font-semibold
                       hover:bg-white/10
                       transition-all duration-300"
          >
            Sign In
          </button>

        </div>

      </div>

    </SectionContainer>
  );
}

export default MemberPrices;