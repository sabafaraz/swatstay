function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">

      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              🏔️ SwatStay
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Discover beautiful hotels and unforgettable stays
              in Swat Valley.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Explore
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="#"
                className="block hover:text-white transition"
              >
                Hotels
              </a>

              <a
                href="#"
                className="block hover:text-white transition"
              >
                Deals
              </a>

              <a
                href="#"
                className="block hover:text-white transition"
              >
                Destinations
              </a>

              <a
                href="#"
                className="block hover:text-white transition"
              >
                Things to Do
              </a>
            </div>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Help
            </h3>

            <div className="space-y-3 text-sm">
              <a
                href="#"
                className="block hover:text-white transition"
              >
                Contact Us
              </a>

              <a
                href="#"
                className="block hover:text-white transition"
              >
                About SwatStay
              </a>

              <a
                href="#"
                className="block hover:text-white transition"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block hover:text-white transition"
              >
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-3">

              <button className="w-10 h-10 rounded-full
                                 bg-gray-800
                                 hover:bg-blue-600
                                 transition">
                f
              </button>

              <button className="w-10 h-10 rounded-full
                                 bg-gray-800
                                 hover:bg-pink-600
                                 transition">
                ◎
              </button>

              <button className="w-10 h-10 rounded-full
                                 bg-gray-800
                                 hover:bg-blue-500
                                 transition">
                X
              </button>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6
                        text-center text-sm text-gray-500">

          © 2026 SwatStay. All rights reserved.

        </div>

      </div>

    </footer>
  );
}

export default Footer;