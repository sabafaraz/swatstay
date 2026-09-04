
import { Navigate, useNavigate } from "react-router-dom";
function HotelCard({ hotel ,onHotelClick, variant = "default"}) {
const navigate = useNavigate();
  return (
    <div onClick={() => onHotelClick(hotel)}
     className=" cursor-pointer bg-white rounded-2xl overflow-hidden border border-gray-200
                    shadow-sm hover:shadow-xl hover:-translate-y-1
                    transition duration-300">

      {/* Hotel Image */}
      <div className=" h-52 bg-gray-200 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover
                     hover:scale-105 transition duration-500"
        />
      </div>

      {/* Hotel Information */}
      <div className="p-5 flex flex-col min-h-[230px]">

        <div className="flex justify-between items-start gap-2">

          <div>
            <h3 className="text-lg font-bold text-gray-900">
              {hotel.name}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              📍 {hotel.location}
            </p>
          </div>

          <span className="bg-yellow-100 text-yellow-700
                           px-2 py-1 rounded-lg text-sm font-semibold">
            ⭐ {hotel.rating}
          </span>

        </div>

        <div className="flex items-end justify-between mt-auto min-h-[90px] ">

          <div>
            <p className="text-sm text-gray-500">
              From
            </p>

            <p className="text-xl font-bold text-gray-900">
              PKR {hotel.price}
            </p>

            <p className="text-xs text-gray-500">
              per night
            </p>
          </div>
  <button
          onClick={(e) => {
          e.stopPropagation();
           onHotelClick(hotel);
            navigate(`/search?destination=${encodeURIComponent(hotel.destination)}`);
             }}
                className="bg-[#00AEEF] text-white w-28 h-10 rounded-xl
             font-semibold hover:bg-[#0099CC]
             transition duration-300 cursor-pointer
             flex items-center justify-center"
               >
               View Deal
</button>


        </div>

      </div>

    </div>
  );
}

export default HotelCard;