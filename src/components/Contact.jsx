import SectionContainer from "./SectionContainer";
function Contact() {
  return (
    <SectionContainer>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Left Side */}
        <div className="bg-blue-600 rounded-3xl p-8 md:p-10 text-white">

          <p className="text-blue-100 font-semibold mb-2">
            Get in touch
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Contact SwatStay
          </h2>

          <p className="mt-4 text-blue-100 leading-relaxed">
            Have a question about hotels, bookings, or your trip
            to Swat? Send us a message and we'll be happy to help.
          </p>

          <div className="mt-8 space-y-4">

            <p>
              📧 <span className="ml-2">support@swatstay.com</span>
            </p>

            <p>
              📞 <span className="ml-2">+92 300 1234567</span>
            </p>

            <p>
              📍 <span className="ml-2">Swat Valley, Pakistan</span>
            </p>

          </div>

        </div>

        {/* Right Side - Form */}
        <div className="bg-white border border-gray-200
                        rounded-3xl p-8 md:p-10 shadow-sm
                        hover:shadow-lg transition-all duration-300">

          <h3 className="text-2xl font-bold text-gray-900">
            Send us a message
          </h3>

          <div className="mt-6 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300
                         rounded-xl px-4 py-3
                         outline-none
                         focus:border-blue-500
                         focus:ring-2 focus:ring-blue-100
                         transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300
                         rounded-xl px-4 py-3
                         outline-none
                         focus:border-blue-500
                         focus:ring-2 focus:ring-blue-100
                         transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-300
                         rounded-xl px-4 py-3
                         outline-none resize-none
                         focus:border-blue-500
                         focus:ring-2 focus:ring-blue-100
                         transition"
            />

            <button
              className="w-full bg-blue-600 text-white
                         py-3 rounded-xl font-semibold
                         hover:bg-blue-700
                         hover:shadow-lg
                         transition-all duration-300"
            >
              Send Message →
            </button>

          </div>

        </div>

      </div>

    </SectionContainer>
  );
}

export default Contact;