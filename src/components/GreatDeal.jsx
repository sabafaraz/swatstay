import { useNavigate } from "react-router-dom";
function GreatDeal() {
    const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden bg-white rounded-2xl shadow-sm min-h-[180px] max-w-6xl mx-auto">

      {/* Left Red + Orange Design */}
      <div className="absolute left-0 top-0 bottom-0 w-12 flex">
        <div className="w-1/1 bg-[#E41E3F]"></div>
        <div className="w-1/1 bg-[#FFA500]"></div>
      </div>

      {/* Right Blue Design */}
      <div className="absolute right-0 top-0 bottom-0 w-14 bg-[#00AEEF]"></div>

     <div className="px-20 py-10 flex items-center justify-between">

  {/* Left Content */}
  <div>
    <h2 className="text-2xl font-bold text-gray-900">
      Your shortcut to
      <br />
      finding a great deal
    </h2>

    <p className="text-sm text-gray-500 mt-2">
      Discover the best hotel deals in Swat
    </p>
  </div>

  {/* Right Button */}
  
  <button
  onClick={() => navigate("/")}
  className="bg-gray-800 text-white px-5 py-2 rounded-lg
             hover:bg-gray-700 transition"
>
  Start searching
</button>

</div>

    </div>
  );
}

export default GreatDeal;