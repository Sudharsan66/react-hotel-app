import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {formatDate} from '../utils/formatDate';
import { fetchHotels } from '../services/hotelService';
import { Hotel } from '../types/types';


const HotelsList: React.FC = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [ratingFilter, setRatingFilter] = useState(""); 

  
  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRating =
      ratingFilter === "" || hotel.rating >= parseFloat(ratingFilter);

    return matchesSearch && matchesRating;
  });
  
  useEffect(() => {
    const getHotels = async () => {
      try {
        setLoading(true);
        const hotelsData = await fetchHotels();
        setHotels(hotelsData);
      } catch (err) {
        setError('Failed to fetch hotels. Please try again.');
      } finally {
        setLoading(false)
      }
    };

    getHotels();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }  

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  return (
    <div className="p-4 w-auto mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Hotels</h1>
      <div className="grid grid-cols-1">
      <div className="p-4">
      {/* Filter Section */}
      <table className="min-w-full bg-white border-collapse border border-gray-200 rounded-lg shadow-lg overflow-hidden">
        <thead>
          {/* Filter Inputs Row */}
          <tr className="bg-gray-200 text-gray-700">
            <th className="px-6 py-3 text-sm font-medium uppercase border border-gray-300">
              <input
                type="text"
                placeholder="Search Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </th>
            <th className="px-6 py-3 text-sm font-medium uppercase border border-gray-300">
              <input
                type="text"
                placeholder="Search Location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </th>
            <th className="px-6 py-3 text-sm font-medium uppercase border border-gray-300">
              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="w-full px-2 py-1 border rounded-md focus:outline-double focus:ring focus:border-blue-300 text"
              >
                <option value="">All Ratings</option>
                <option value="4">4 & Above</option>
                <option value="4.5">4.5 & Above</option>
                <option value="4.8">4.8 & Above</option>
              </select>
            </th>
            <th className="px-6 py-3 text-sm font-medium uppercase border border-gray-300">Image</th>
            <th className="px-6 py-3 text-sm font-medium uppercase border border-gray-300">Travel Dates</th>
            <th className="px-6 py-3 text-sm font-medium uppercase border border-gray-300">Board Basis</th>
            <th className="px-6 py-3 text-sm font-medium uppercase border border-gray-300">Rooms</th>
            <th className="px-6 py-3 text-sm font-medium uppercase border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredHotels.map((hotel) => (
            <tr
              key={hotel.id}
              className="hover:bg-gray-50 transition-shadow shadow-sm rounded-md overflow-hidden border-b border-gray-100"
            >
              <td className="px-6 py-4 text-sm text-gray-800 font-medium border border-gray-300">{hotel.name}</td>
              <td className="px-6 py-4 text-sm text-gray-800 border border-gray-300">{hotel.location}</td>
              <td className="px-6 py-4 text-sm text-gray-800 flex items-center gap-1 border border-gray-300">
                {hotel.rating} <span className="text-yellow-500">⭐</span>
              </td>
              <td className="px-6 py-4 text-sm border border-gray-300">
                <img
                  src={hotel.MainimageUrl}
                  alt={hotel.name}
                  className="w-16 h-16 object-cover rounded-md shadow-md"
                />
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border border-gray-300">
                {hotel.datesOfTravel.map((date) => formatDate(date)).join(" - ")}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 border border-gray-300">{hotel.boardBasis}</td>
              <td className="px-6 py-4 text-sm border border-gray-300">
                <ul className="list-disc list-inside text-gray-700">
                  {hotel.rooms?.map((room, index) => (
                    <li key={index} className="text-sm">
                      {room.roomType} - {room.amount} available
                    </li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4 text-sm text-blue-500 border border-gray-300">
                <Link
                  to={`/hotels/${hotel.id}`}
                  className="hover:underline text-blue-600"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
    </div>
  );
};

export default HotelsList;
