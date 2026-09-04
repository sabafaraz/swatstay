import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
function Navbar() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="w-full px-6 py-4">

        {/* Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-tight">
           <span style={{ color: '#E41E3F' }}>S</span>
           <span style={{ color: '#E41E3F' }}>w</span>
           <span style={{ color: '#E41E3F' }}>a</span>
           <span style={{ color: '#FFA500' }}>t</span>
           <span style={{ color: '#FFA500' }}>S</span>
           <span style={{ color: '#FFA500' }}>t</span>
           <span style={{ color: '#00AEEF' }}>a</span>
           <span style={{ color: '#00AEEF' }}>y</span>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Language */}
  <button 
            onClick={() => setShowLanguageModal(true)}
            className="
            cursor-pointer
            rounded-full
            px-4
            py-2
            transition-all
            duration-200
           hover:bg-gray-100
           "
           >
           🌐 EN - PKR
</button>

            {/* Sign in / Sign up */}
 <button
              onClick={() => setShowSignUp(true)}
              
            className="
            cursor-pointer
              rounded-full
               px-4
                py-2
                transition-all
                duration-200
               hover:bg-gray-100
                 "
>
              Sign in
   </button>

            {/* Menu */}
            <div className="relative">

  <button
        onClick={() => setShowMenu(!showMenu)}
        className="
            cursor-pointer
              rounded-full
               px-4
                py-2
                transition-all
                duration-200
               hover:bg-gray-100
                 "
              >
          ☰ <span>Menu</span>
  </button>

         {showMenu && (
        <div className="absolute right-0 top-12 z-50 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-3">

      {/* Trips */}
        <div className="px-4 py-2 text-sm font-bold text-gray-800">
        Trips
        </div>

  <button
        onClick={() => window.location.href = "/favorites"}
        className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        <span className="text-xl">♡</span>
        <span>Favorites</span>
  </button>

  <button
        onClick={() => alert("Recently viewed clicked")}
        className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        <span className="text-xl">◷</span>
        <span>Recently viewed</span>
   </button>

   <button
        onClick={() => alert("Bookings clicked")}
        className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        <span className="text-xl">▣</span>
        <span>Bookings</span>
  </button>

      {/* Preferences */}
      <div className="px-4 pt-4 pb-2 text-sm font-bold text-gray-800">
        Preferences
      </div>

  <button
        onClick={() => {
          setShowMenu(false);
          setShowLanguageModal(true);
        }}
        className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        <span className="text-xl">🌐</span>
        <span>Language and currency</span>
 </button>

      {/* Support */}
      <div className="px-4 pt-4 pb-2 text-sm font-bold text-gray-800">
        Support
      </div>

  <button
        onClick={() => alert("Help and support clicked")}
        className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        <span className="text-xl">?</span>
        <span>Help and support</span>
  </button>

  <button
        onClick={() => alert("Trivago for hoteliers clicked")}
        className="w-full px-4 py-3 flex items-center gap-3 text-left text-sm text-gray-700 hover:bg-gray-100"
      >
        <span className="text-xl">▦</span>
        <span>SwatStay for hoteliers</span>
   </button>

         </div>
         )}

          </div>
 </div>
 </div>

        {/* ================= SIGN UP POPUP ================= */}
        {showSignUp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="relative w-[400px] max-w-[90%] rounded-2xl bg-white shadow-2xl p-6">

              {/* Close Button - TOP RIGHT */}
              <button
                onClick={() => setShowSignUp(false)}
                className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-900"
              >
                ×
              </button>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pr-8">
                Unlock more savings as a member
              </h2>

              {/* Google */}
    <button
          onClick={() => alert("Google sign-in clicked")}
         className="w-full border border-gray-300 rounded-lg py-3 mb-3 relative hover:bg-gray-50"
         >
          <FcGoogle className="text-xl absolute left-4 top-1/2 -translate-y-1/2" />
            <span>Continue with Google</span>
   </button>
              {/* Apple */}
     <button
           onClick={() => alert("Apple sign-in clicked")}
          className="w-full border border-gray-300 rounded-lg py-3 mb-3 relative hover:bg-gray-50"
       >
         <FaApple className="text-xl absolute left-4 top-1/2 -translate-y-1/2" />
          <span> Apple</span>
    </button>

              {/* Facebook */}
     <button
           onClick={() => alert("Facebook sign-up clicked")}
           className="w-full border border-gray-300 rounded-lg py-3 mb-3 relative hover:bg-gray-50"
         >
            <FaFacebook className="text-xl text-[#1877F2] absolute left-4 top-1/2 -translate-y-1/2" />
          <span>Continue with Facebook</span>
       </button>

              {/* OR */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-gray-500 text-sm">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Email Label */}
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 outline-none focus:border-blue-500 mb-3"
              />

              {/* Continue With Email - BELOW INPUT */}
              <button
                onClick={() => alert("Continue with email")}
                className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
              >
                Continue with email
              </button>

              {/* Terms */}
              <p className="text-xs text-gray-500 mt-5 leading-5">
                By creating an account, you agree to our{" "}
                <span className="text-blue-500">Privacy policy</span>{" "}
                and{" "}
                <span className="text-blue-500">Terms of use</span>.
              </p>

            </div>
          </div>
        )}

        {/* ================= LANGUAGE POPUP ================= */}
        {showLanguageModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="relative w-[400px] max-w-[90%] rounded-2xl bg-white shadow-2xl p-6">

              {/* Close */}
              <button
                onClick={() => setShowLanguageModal(false)}
                className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-900"
              >
                ×
              </button>

              <h2 className="text-xl font-bold text-gray-800 mb-6 pr-8">
                Select language and currency
              </h2>

              {/* Language */}
              <div className="mb-5">
                <label className="block text-sm text-gray-500 mb-2">
                  Language
                </label>

                <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
                  <option>English</option>
                  <option>Urdu</option>
                </select>
              </div>

              {/* Currency */}
              <div className="mb-6">
                <label className="block text-sm text-gray-500 mb-2">
                  Currency
                </label>

                <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
                  <option>PKR - Pakistani Rupee</option>
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                  <option>GBP - British Pound</option>
                </select>
              </div>

              {/* Apply */}
              <button
                onClick={() => setShowLanguageModal(false)}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold"
              >
                Apply
              </button>

            </div>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;