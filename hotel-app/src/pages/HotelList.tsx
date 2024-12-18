import React, { useEffect, useState } from "react";

interface Room {
  roomType: string;
  amount: number;
}

interface Hotel {
  id: number;
  name: string;
  location: string;
  rating: number;
  imageUrl: string;
  boardBasis: string;
  rooms: Room[];
}

const HotelList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/hotels")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch hotels.");
        }
        return response.json();
      })
      .then((data) => setHotels(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) {
    return <p className="text-red-500 text-center mt-4">{error}</p>;
  }

  if (!hotels.length) {
    return <p className="text-gray-500 text-center mt-4">No hotels available.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Hotels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={hotel.imageUrl}
              alt={hotel.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="text-yellow-500 font-bold mt-2">Rating: {hotel.rating}</p>
              <p className="text-gray-700 mt-2">Board Basis: {hotel.boardBasis}</p>
              <h3 className="text-lg font-medium mt-4">Rooms</h3>
              <ul className="list-disc pl-5">
                {hotel.rooms.map((room, idx) => (
                  <li key={idx}>
                    {room.roomType}: <span className="font-semibold">{room.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelList;
