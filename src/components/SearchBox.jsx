import { useEffect, useState } from "react";
function SearchBox({onSearch}) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchType, setSearchType] = useState(0);

  const [destination, setDestination] = useState("");

  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  const [currentMonth, setCurrentMonth] = useState(7);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [childAges, setChildAges] = useState([]);
  const [openAgePicker, setOpenAgePicker] = useState(null);

  const currentYear = 2026;

  const labels = [
    "Destination",
    "Hotels",
    "Landmarks",
    "Smart search",
  ];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDaysInMonth = (month) => {
    return new Date(currentYear, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month) => {
    return new Date(currentYear, month, 1).getDay();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSearchType((prev) => (prev + 1) % labels.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  // ================= CHILD FUNCTIONS =================

  const addChild = () => {
    setChildren((prev) => prev + 1);
    setChildAges((prev) => [...prev, 6]);
  };

  const removeChild = () => {
    if (children > 0) {
      setChildren((prev) => prev - 1);
      setChildAges((prev) => prev.slice(0, -1));
      setOpenAgePicker(null);
    }
  };

  const changeChildAge = (childIndex, newAge) => {
    setChildAges((prev) => {
      const newAges = [...prev];
      newAges[childIndex] = newAge;
      return newAges;
    });

    setOpenAgePicker(null);
  };

  // ================= QUICK DATE FUNCTION =================

       const handleQuickDate = (option) => {
  const today = new Date();

  let startDate;
  let endDate;

  if (option === "Tonight") {
    startDate = new Date(today);
    endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 1);
  }

  if (option === "Tomorrow night") {
    startDate = new Date(today);
    startDate.setDate(startDate.getDate() + 1);

    endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 2);
  }

  if (option === "This weekend") {
    startDate = new Date(today);
    endDate = new Date(today);

    const day = today.getDay();
    const daysUntilFriday = (5 - day + 7) % 7;

    startDate.setDate(today.getDate() + daysUntilFriday);
    endDate.setDate(startDate.getDate() + 2);
  }

  if (option === "Next weekend") {
    startDate = new Date(today);
    endDate = new Date(today);

    const day = today.getDay();
    const daysUntilNextFriday = ((5 - day + 7) % 7) + 7;

    startDate.setDate(today.getDate() + daysUntilNextFriday);
    endDate.setDate(startDate.getDate() + 2);
  }

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  setCheckIn(formatDate(startDate));
  setCheckOut(formatDate(endDate));

  setShowCalendar(false);
  setShowGuests(true);

  setShowSuggestions(false);
  setOpenAgePicker(null);
};
 

return (
    <div className="relative bg-white p-2 rounded-2xl shadow-lg w-full mx-auto flex items-center gap-3">

      {/* ================= DESTINATION ================= */}

      <div
        className={`relative flex items-center gap-3 px-3 py-2.5 rounded-2xl cursor-pointer
           flex-1 min-w-[240px] transition-all duration-200 ${
          showSuggestions
            ? "border border-[#00AEEF] ring-1 ring-blue-500"
            : "border border-transparent hover:bg-gray-100"
        }`}
        onClick={() => {
          setShowSuggestions(!showSuggestions);
          setShowCalendar(false);
          setShowGuests(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61Z"
          />
        </svg>

        <div>
          <p className="text-sm text-gray-500">
            {labels[searchType]}
          </p>

         <input
           type="text"
           value={destination}
           onChange={(e) => setDestination(e.target.value)}
           placeholder="Enter destination"
           className="text-base font-semibold text-gray-900 outline-none bg-transparent w-full"
           onClick={(e) => e.stopPropagation()}
          />
       {/*destination suggestion */}
         {showSuggestions && (
       <div
    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl
     shadow-lg border border-gray-200 p-3 z-[300]"
    onClick={(e) => e.stopPropagation()}
  >
    <p className="text-sm font-semibold text-gray-700 mb-2">
      Recently searched
    </p>

    <button
      onClick={() => {
        setDestination("Mingora");
        setShowSuggestions(false);
      }}
      className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100"
    >
      📍 Mingora
    </button>

    <button
      onClick={() => {
        setDestination("Swat");
        setShowSuggestions(false);
      }}
      className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100"
    >
      📍 Swat
    </button>

    <button
      onClick={() => {
        setDestination("Kalam");
        setShowSuggestions(false);
      }}
      className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100"
    >
      📍 Kalam
    </button>
  </div>
)}
        </div>
      </div>

      {/* ================= CHECK-IN / OUT ================= */}

      <div
        className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl
           cursor-pointer min-w-[280px] border-l transition-all duration-200 ${
          showCalendar
            ? "border-[#00AEEF] ring-1 ring-blue-500"
            : "border-gray-200 hover:bg-gray-100"
        }`}
        onClick={() => {
          setShowCalendar(!showCalendar);
          setShowGuests(false);
          setShowSuggestions(false);
          setOpenAgePicker(null);
        }}
      >
        <span className="text-xl">📅</span>

        <div>
          <p className="text-sm text-gray-500">
            Check in/out
          </p>

          <p className="text-base font-semibold text-gray-900">
              {checkIn
            ? checkOut
             ? `${checkIn} - ${checkOut}`
           : `${checkIn} - Select check-out`
              : "Select dates"}
          </p>
        </div>

        {/* ================= CALENDAR ================= */}

        {showCalendar && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-full left-0 mt-2 w-[700px] bg-white rounded-lg shadow-lg border border-gray-200 p-5 z-[200]"
          >

            {/* MONTH NAVIGATION */}

           <div className="flex justify-between items-center mb-5">

  <button
    onClick={() =>
      setCurrentMonth((prev) =>
        Math.max(0, prev - 1)
      )
    }
    className="text-2xl px-3"
  >
    ‹
  </button>

  <button
    onClick={() =>
      setCurrentMonth((prev) =>
        Math.min(10, prev + 1)
      )
    }
    className="text-2xl px-3"
  >
    ›
  </button>

</div>

            {/* ================= TWO CALENDARS ================= */}

            <div className="flex gap-6">

              {/* FIRST MONTH */}

              <div className="flex-1">

                <h3 className="font-semibold text-gray-800 text-center mb-3">
                  {monthNames[currentMonth]} {currentYear}
                </h3>

                <div className="grid grid-cols-7 gap-2 text-center">

                  {[
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                  ].map((day) => (
                    <span
                      key={day}
                      className="text-xs text-gray-500"
                    >
                      {day}
                    </span>
                  ))}

                </div>

                <div className="grid grid-cols-7 gap-2 mt-2 text-center">

                  {Array.from({
                    length: getFirstDayOfMonth(
                      currentMonth
                    ),
                  }).map((_, i) => (
                    <span key={`empty-${i}`}></span>
                  ))}

                  {Array.from(
                    {
                      length: getDaysInMonth(
                        currentMonth
                      ),
                    },
                    (_, i) => {

                      const dateText =
                        `${monthNames[currentMonth]} ${
                          i + 1
                        }, ${currentYear}`;

                      return (
                        <button
                          key={i}
                          onClick={() => {
                           if (!checkIn) {
                          setCheckIn(dateText);
                        } else if (!checkOut) {
                       setCheckOut(dateText);
                       setShowCalendar(false);
                       setShowGuests(true);
                       } else {
                         setCheckIn(dateText);
                     setCheckOut(null);
                       }
                     }}
                         className={`rounded-full p-1 text-sm ${
                 checkIn === dateText || checkOut === dateText
                     ? "bg-[#00AEEF] text-white"
                    : "hover:bg-blue-100"
                            }`}
                        >
                          {i + 1}
                        </button>
                      );
                    }
                  )}

                </div>
              </div>

              {/* SECOND MONTH */}

              <div className="flex-1">

                <h3 className="font-semibold text-gray-800 text-center mb-3">
                  {monthNames[(currentMonth + 1) % 12]}{" "}
                  {currentMonth === 11
                    ? currentYear + 1
                    : currentYear}
                </h3>

                <div className="grid grid-cols-7 gap-2 text-center">

                  {[
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                  ].map((day) => (
                    <span
                      key={day}
                      className="text-xs text-gray-500"
                    >
                      {day}
                    </span>
                  ))}

                </div>

                <div className="grid grid-cols-7 gap-2 mt-2 text-center">

                  {Array.from({
                    length: getFirstDayOfMonth(
                      currentMonth + 1
                    ),
                  }).map((_, i) => (
                    <span
                      key={`empty2-${i}`}
                    ></span>
                  ))}

                  {Array.from(
                    {
                      length: getDaysInMonth(
                        currentMonth + 1
                      ),
                    },
                    (_, i) => {

                      const secondMonth =
                        (currentMonth + 1) % 12;

                      const secondYear =
                        currentMonth === 11
                          ? currentYear + 1
                          : currentYear;

                      const dateText =
                        `${monthNames[secondMonth]} ${
                          i + 1
                        }, ${secondYear}`;

                      return (
                        <button
                          key={i}
                         onClick={() => {
                         if (!checkIn) {
                         setCheckIn(dateText);
                           } else if (!checkOut) {
                       setCheckOut(dateText);
                      setShowCalendar(false);
                     setShowGuests(true);
                      } else {
                  setCheckIn(dateText);
                   setCheckOut(null);
                      }
                           }}
                          className={`rounded-full p-1 text-sm ${
                         checkIn === dateText || checkOut === dateText
                     ? "bg-[#00AEEF] text-white"
                         : "hover:bg-blue-100"
                          }`}
                        >
                          {i + 1}
                        </button>
                      );
                    }
                  )}

                </div>
              </div>

            </div>

            {/* ================= QUICK DATES ================= */}

            <div className="flex gap-3 mt-6 flex-wrap">

              {[
                "Tonight",
                "Tomorrow night",
                "This weekend",
                "Next weekend",
              ].map((option) => (

                <button
                  key={option}
                  onClick={() =>
                    handleQuickDate(option)
                  }
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold hover:bg-gray-50"
                >
                  📅 {option}
                </button>

              ))}

            </div>

          </div>
        )}
      </div>

      {/* ================= GUESTS & ROOMS ================= */}

      <div
        className={`relative flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer
           min-w-[230px] border-l transition-all duration-200 ${
          showGuests
            ? "border-[#00AEEF] ring-1 ring-blue-500"
            : "border-gray-200 hover:bg-gray-100"
        }`}
        onClick={() => {
          setShowGuests(!showGuests);
          setShowCalendar(false);
          setShowSuggestions(false);
        }}
      >

        <span className="text-xl">👥</span>

        <div>

          <p className="text-sm text-gray-500">
            Guests and rooms
          </p>

          <p className="text-base font-semibold text-gray-900">
            {adults + children} Guests, {rooms} Room
            {rooms > 1 ? "s" : ""}
          </p>

        </div>

        {/* ================= GUEST CARD ================= */}

        {showGuests && (

          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-full right-0 mt-2 w-[430px] bg-white rounded-xl shadow-lg border border-gray-200 p-5 z-[300]"
          >

            {/* ADULTS */}

            <div className="flex items-center justify-between py-3">

              <span className="text-sm font-medium">
                Adults
              </span>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setAdults((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                  className="w-9 h-9 rounded-full border border-gray-300"
                >
                  −
                </button>

                <span className="w-5 text-center">
                  {adults}
                </span>

                <button
                  onClick={() =>
                    setAdults((prev) => prev + 1)
                  }
                  className="w-9 h-9 rounded-full border border-gray-300"
                >
                  +
                </button>

              </div>

            </div>

            {/* CHILDREN */}

            <div className="flex items-center justify-between py-3">

              <span className="text-sm font-medium">
                Children
              </span>

              <div className="flex items-center gap-4">

                <button
                  onClick={removeChild}
                  className="w-9 h-9 rounded-full border border-gray-300"
                >
                  −
                </button>

                <span className="w-5 text-center">
                  {children}
                </span>

                <button
                  onClick={addChild}
                  className="w-9 h-9 rounded-full border border-gray-300"
                >
                  +
                </button>

              </div>

            </div>

            {/* ================= CHILDREN AGES ================= */}

            {children > 0 && (

              <div className="mt-3 border-t border-gray-200 pt-4">

                <p className="text-sm font-medium text-gray-800 mb-3">
                  Children's ages{" "}
                  <span className="text-gray-500">
                    (Required)
                  </span>
                </p>

                <div className="space-y-3">

                  {childAges.map((age, index) => (

                    <div
                      key={index}
                      className="relative flex items-center justify-between py-2"
                    >

                      <span className="text-sm text-gray-700">
                        Child {index + 1}
                      </span>

                      <button
                        onClick={() => {
                          setOpenAgePicker(
                            openAgePicker === index
                              ? null
                              : index
                          );
                        }}
                        className="flex items-center justify-between gap-5 min-w-[85px] border border-gray-300 rounded-lg px-3 py-2 bg-white"
                      >
                        <span>{age}</span>

                        <span className="text-gray-500">
                          ▼
                        </span>

                      </button>

                      {/* AGE DROPDOWN */}

                      {openAgePicker === index && (

                        <div
                          onClick={(e) =>
                            e.stopPropagation()
                          }
                          className="absolute right-0 bottom-full mb-2 w-[85px] max-h-52 overflow-y-auto bg-white border border-gray-300 rounded-lg shadow-xl z-[500]"
                        >

                          {Array.from(
                            { length: 18 },
                            (_, ageOption) => (

                              <button
                                key={ageOption}
                                onClick={() =>
                                  changeChildAge(
                                    index,
                                    ageOption
                                  )
                                }
                                className={`w-full px-3 py-2 text-center text-sm ${
                                  age === ageOption
                                    ? "bg-[#00AEEF] text-white"
                                    : "hover:bg-gray-100 text-gray-700"
                                }`}
                              >
                                {ageOption}
                              </button>

                            )
                          )}

                        </div>

                      )}

                    </div>

                  ))}

                </div>

              </div>

            )}

            {/* ================= ROOMS ================= */}

            <div className="flex items-center justify-between py-4 mt-2 border-t border-gray-200">

              <span className="text-sm font-medium">
                Rooms
              </span>

              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setRooms((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                  className="w-9 h-9 rounded-full border border-gray-300"
                >
                  −
                </button>

                <span className="w-5 text-center">
                  {rooms}
                </span>

                <button
                  onClick={() =>
                    setRooms((prev) => prev + 1)
                  }
                  className="w-9 h-9 rounded-full border border-gray-300"
                >
                  +
                </button>

              </div>

            </div>

            {/* ================= APPLY ================= */}

            <button
              onClick={() => {
                setShowGuests(false);
                setOpenAgePicker(null);
              }}
              className="mt-3 w-full bg-[#00AEEF] text-white py-2.5 rounded-lg font-medium hover:bg-[#00AEEF]"
            >
              Apply
            </button>

          </div>

        )}

      </div>

      {/* ================= SEARCH BUTTON ================= */}

      <div className="border-l border-gray-200 pl-2 pr-1 flex items-center">

        <button
      onClick={() => {
    setShowGuests(false);
    setShowCalendar(false);
    setShowSuggestions(false);
    setOpenAgePicker(null);

      onSearch({
      destination,
      checkIn,
      checkOut,
       adults , 
       children,
       rooms,
    });
  }}
  className="bg-[#00AEEF] text-white px-5
   py-2.5 rounded-xl hover:bg-[#0099CC]"
   >
     Search
   </button>

      </div>

    </div>
  );
}
export default SearchBox;
