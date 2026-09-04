import hotelimage from "../assets/serena1.jpg";
import kalamimage from "../assets/kalam.jpg";
import malamimage from "../assets/malma.jpg";
import mingoraImage from "../assets/mingora.jpg";
const hotels = [
  {
    id: 1,
    name: "Swat Serena Hotel",
    destination: "Saidu Sharif",
    location: "Officers Colony Road, Saidu Sharif, Swat",
    rating: 4.5,
    price: "8,000",
    address: "Officers Colony Road, Saidu Sharif, Swat, Pakistan",
    description:
      "A comfortable hotel in Saidu Sharif with modern facilities.",
    amenities: [
      "Free Wi-Fi",
      "Restaurant",
      "Swimming Pool",
      "Room Service",
      "Parking",
    ],
    image: hotelimage,
  },

  {
    id: 2,
    name: "Kalam Resort",
    destination: "Kalam",
    location: "Kalam, Swat",
    rating: 4.7,
    price: "10,500",
    address: "Kalam, Swat, Khyber Pakhtunkhwa, Pakistan",
    description:
      "A comfortable resort in the beautiful Kalam Valley.",
    amenities: [
      "Free Wi-Fi",
      "Restaurant",
      "Mountain View",
      "Parking",
    ],
    image: kalamimage,
  },

  {
    id: 3,
    name: "Malam Jabba Resort",
    destination: "Malam Jabba",
    location: "Malam Jabba Road, Swat",
    rating: 4.8,
    price: "12,000",
    address: "Malam Jabba Road, Malam Jabba, Swat, Pakistan",
    description:
      "A mountain resort surrounded by the beautiful scenery of Malam Jabba.",
    amenities: [
      "Restaurant",
      "Mountain View",
      "Room Service",
      "Parking",
    ],
    image: malamimage,
  },

  {
    id: 4,
    name: "Mingora Hotel",
    destination: "Mingora",
    location: "Mingora, Swat",
    rating: 4.3,
    price: "7,500",
    address: "Mingora, Swat, Khyber Pakhtunkhwa, Pakistan",
    description:
      "A comfortable hotel in Mingora for visitors exploring Swat.",
    amenities: [
      "Free Wi-Fi",
      "Restaurant",
      "Room Service",
      "Parking",
    ],
    image: mingoraImage,
  },

{
  id: 5,
  name: "Swat Valley Resort",
  destination: "Mingora",
  location: "Mingora, Swat",
  rating: 4.4,
  price: "6,500",
  address: "Mingora, Swat, Pakistan",
  description: "A comfortable stay in Swat Valley.",
  amenities: [
    "Free Wi-Fi",
    "Restaurant",
    "Parking",
    "Room Service"
  ],
  image: mingoraImage,
},

{
  id: 6,
  name: "Kalam View Hotel",
  destination: "Kalam",
  location: "Kalam, Swat",
  rating: 4.5,
  price: "8,500",
  address: "Kalam, Swat, Pakistan",
  description: "A peaceful hotel with beautiful mountain views.",
  amenities: [
    "Free Wi-Fi",
    "Restaurant",
    "Mountain View",
    "Parking"
  ],
  image: kalamimage,
},
];

export default hotels;