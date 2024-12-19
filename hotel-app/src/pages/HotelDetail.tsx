import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchHotelById } from '../services/hotelService';
import {formatDate} from '../utils/formatDate'
import { Hotel } from '../types/types';

const HotelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getHotel = async () => {
      try {
        setLoading(true);
        console.log("id",id)
        if (id) {
            const hotelData = await fetchHotelById(id);
            console.log("hoteldata",hotelData)
            setHotel(hotelData);
          }
      } catch (err) {
        setError('Hotel Not Found');
      } finally {
        setLoading(false)
      }
    };

    getHotel();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-10">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  

  if (error) {
    return (
      <div className="text-center mt-10 text-red-600">
        {error}
        <div>
          <Link to="/hotels" className="text-blue-500 hover:underline">
            Back to Hotels
          </Link>
        </div>
      </div>
    );
  }

  if (hotel) {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
          {/* Hotel Name */}
          <h1 className="text-3xl flex items-center justify-between font-semibold text-center mb-6 text-gray-800">{hotel.name}
          <Link
              to="/hotels"
              className="inline-block text-sm bg-blue-600 text-white py-1 px-3 rounded-full hover:bg-blue-700 hover:text-white"
            >
              Back to Hotels
            </Link>
          </h1>
          <hr />
          
          {/* Hotel Image */}
          <div className="w-full my-6">
            <img
              src={hotel.MainimageUrl}
              alt={hotel.name}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>
    
          {/* Hotel Details */}
          <div className="space-y-6">
            <p className="flex items-center text-gray-600">
              <strong className="mr-2">Dates of Travel	:</strong>
              <span>{hotel.datesOfTravel.map(date => formatDate(date)).join(' - ')}</span>
            </p>
    
            {/* Location */}
            <p className="flex items-center text-gray-600">
              <strong className="mr-2">Location:</strong>
              <span>{hotel.location}</span>
            </p>
    
            {/* Rating */}
            <p className="flex items-center text-gray-600">
              <strong className="mr-2">Rating:</strong>
              <span>{hotel.rating} ⭐</span>
            </p>
    
            {/* Board Basis */}
            <p className="flex items-center text-gray-600">
              <strong className="mr-2">Board Basis:</strong>
              <span>{hotel.boardBasis}</span>
            </p>
    
            {/* Rooms Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Rooms</h3>
              <div className="space-y-4">
                {hotel.rooms?.map((room, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-700">Room Type: {room.roomType}</p>
                    <p className="text-gray-600">Amount: {room.amount}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
    
          {/* Back to Hotels Button */}
        
        </div>
      );
  }

  
};

export default HotelDetail;
