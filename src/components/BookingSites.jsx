import SectionContainer from "./SectionContainer";
import { FaHotel, FaGlobe } from "react-icons/fa";

function BookingSites() {
  const sites = [
    {
      name: "Booking.com",
      icon: "",
    },
    {
      name: "Expedia",
      icon: "",
    },
    {
      name: "Hotels.com",
      icon: "",
    },
    {
      name: "Trip.com",
      icon: "✈️",
    },
    {
      name: "Priceline",
      icon: "",
    },
    {
      name: "100+ more",
      icon: "",
    },
  ];

  return (
    <div className="w-full px-2 md:px-6">

      {/* Booking Sites Row */}
      <div className="w-full flex items-center justify-between gap-6">

        {sites.map((site) => (
          <div
            key={site.name}
            className="
              flex items-center justify-center gap-2
              text-gray-700
              font-medium
              whitespace-nowrap
            "
          >
            {site.icon && (
              <span className="text-sm">
                {site.icon}
              </span>
            )}

            <span>{site.name}</span>
          </div>
        ))}

      </div>

    </div>
  );
}

export default BookingSites;