import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
  datesOfTravel: string[];
  boardBasis: string;
  rooms: Room[];
}

const HotelDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [hotelData, setHotelData] = useState<Hotel | null>(null); 

  useEffect(() => {
    fetch(`http://localhost:5000/api/hotel/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load hotel data');
        }
        return response.json();
      })
      .then((data) => setHotelData(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!hotelData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{hotelData.name}</h2>
      <p>Location: {hotelData.location}</p>
      <p>Rating: {hotelData.rating}</p>
      <img src={hotelData.imageUrl} alt={hotelData.name} />
      <p>Board Basis: {hotelData.boardBasis}</p>
      <h3>Rooms:</h3>
      <ul>
        {hotelData.rooms.map((room, idx) => (
          <li key={idx}>
            {room.roomType} - {room.amount} rooms available
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelDetails;
