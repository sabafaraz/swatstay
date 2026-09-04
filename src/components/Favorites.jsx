import { useNavigate } from "react-router-dom";
function Favorites() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <h1 className="text-2xl font-bold text-gray-900">
            SwatStay
          </h1>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">

        <button
            onClick={() => navigate("/")}
            className="text-gray-600 mb-8 hover:text-gray-900"
              >
                ← Back
                  </button>

        <div className="flex gap-10">

          {/* Left Menu */}
          <div className="w-56">

            <div className="bg-gray-100 rounded-lg px-4 py-3 font-semibold">
              ♡ Favorites
            </div>

            <div className="px-4 py-4 text-gray-700">
              ◷ Recently viewed
            </div>

            <div className="px-4 py-4 text-gray-700">
              ▣ Bookings
            </div>

            <div className="px-4 py-4 text-gray-700">
              🌐 Language and currency
            </div>

            <div className="px-4 py-4 text-gray-700">
              ? Help and support
            </div>

          </div>

          {/* Main Content */}
          <div className="flex-1">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Your favorites
            </h2>

            <div className="border border-gray-200 rounded-xl p-10 text-center max-w-md">

              <div className="text-6xl mb-5">
                🏨
              </div>

              <h3 className="text-xl font-semibold mb-2">
                Your next stay
              </h3>

              <p className="text-gray-500">
                You haven't added any favorite stays yet.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Favorites;