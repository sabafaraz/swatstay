
import { useNavigate } from "react-router-dom";
import SectionContainer from "./SectionContainer";
import HotelCard from "./HotelCard";
import hotels from "../data/hotels";
function HotHotelDeals({onHotelClick,destination}){
 const navigate =useNavigate();
 

  return (
    <SectionContainer>

      <div className="flex justify-between items-center mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Hot Hotel Deals in Swat
          </h2>

          <p className="text-gray-500 mt-1">
            Great stays at great prices
          </p>
        </div>

         <button
       onClick={() => navigate("/hotel-deals")}
      className="text-[#00AEEF] font-semibold hover:underline"
     >
         See more deals →
        </button>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

       {(  hotels.slice(0, 4)).map((hotel) => (
          <HotelCard
            key={hotel.name}
            hotel={hotel}
            onHotelClick={onHotelClick}
          />
        ))}

      </div>
    

    </SectionContainer>
  );
}

export default HotHotelDeals;