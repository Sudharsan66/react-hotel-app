import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/formatDate';
import { fetchHotels } from '../services/hotelService';
import { Hotel } from '../types/types';
import { FaTable, FaThLarge } from 'react-icons/fa';
import Loader from '../components/loader';

const HotelsList: React.FC = () => {
  //declarations
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');
  const [viewType, setViewType] = useState<'table' | 'card'>('table');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = viewType === 'table' ? 4 : 6;

  //Filters
  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRating =
      ratingFilter === '' || hotel.rating >= parseFloat(ratingFilter);

    return matchesSearch && matchesRating;
  });

  //Pagination
  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);

  const paginatedHotels = filteredHotels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const getHotels = async () => {
      try {
        setLoading(true);
        const hotelsData = await fetchHotels();
        setHotels(hotelsData);
      } catch (err) {
        setError('Failed to fetch hotels. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    getHotels();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [viewType]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return <Loader size="h-12 w-12" color="border-blue-500" />;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-600">{error}</div>;
  }

  return (
    <div className="p-4 w-auto mx-auto">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white py-4 px-6 pb-4 shadow-lg flex justify-between items-center w-auto rounded-lg mb-4">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:underline">
            Hotels List
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {/* Search bar */}
          <input
            type="text"
            placeholder="Search Name or Location"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-white"
          />
          {/* Rating drop down */}
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="">All Ratings</option>
            <option value="4">4 & Above</option>
            <option value="4.5">4.5 & Above</option>
            <option value="4.8">4.8 & Above</option>
          </select>
          {/* Toggle between table and card */}
          <button
            onClick={() => setViewType(viewType === 'table' ? 'card' : 'table')}
            className="p-2 bg-white text-blue-500 rounded-md shadow-md"
          >
            {viewType === 'table' ? <FaThLarge /> : <FaTable />}
          </button>
        </div>
      </nav>
      {/* List Hotels page */}
      {paginatedHotels.length > 0 ? (
        viewType === 'table' ? (
          <div className="overflow-auto rounded-lg">
            <table className="min-w-full bg-white border-collapse border border-gray-200 rounded-lg shadow-lg table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-900">
                  <th className="px-6 py-3 border border-gray-300">Name</th>
                  <th className="px-6 py-3 border border-gray-300">Location</th>
                  <th className="px-6 py-3 border border-gray-300">Rating</th>
                  <th className="px-6 py-3 border border-gray-300">Image</th>
                  <th className="px-6 py-3 border border-gray-300">Travel Dates</th>
                  <th className="px-6 py-3 border border-gray-300">Board Basis</th>
                  <th className="px-6 py-3 border border-gray-300">Rooms</th>
                  <th className="px-6 py-3 border border-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedHotels.map((hotel) => (
                  <tr key={hotel.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 border border-gray-300 text-gray-700">{hotel.name}</td>
                    <td className="px-6 py-4 border border-gray-300 text-gray-700">
                      {hotel.location}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 text-gray-700">
                      {hotel.rating} ⭐
                    </td>
                    <td className="px-6 py-4 border border-gray-300 text-gray-700">
                      <img
                        src={hotel.MainimageUrl}
                        alt={hotel.name}
                        className="w-16 h-16 object-cover rounded-md text-gray-700"
                      />
                    </td>
                    <td className="px-6 py-4 border border-gray-300 text-gray-700">
                      {hotel.datesOfTravel.map((date) => formatDate(date)).join(' - ')}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 text-gray-700">
                      {hotel.boardBasis}
                    </td>
                    <td className="px-6 py-4 border border-gray-300 text-gray-700">
                      <ul>
                        {hotel.rooms?.map((room, index) => (
                          <li key={index}>{room.roomType} - {room.amount} available</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 border border-gray-300 text-blue-500">
                      <Link to={`/hotels/${hotel.id}`}>Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {paginatedHotels.map((hotel) => (
              <div
                key={hotel.id}
                className="p-4 border rounded-lg shadow-md hover:shadow-lg bg-white"
              >
                <img
                  src={hotel.MainimageUrl}
                  alt={hotel.name}
                  className="w-full h-48 object-cover rounded-md mb-2"
                />
                <h2 className="text-lg font-semibold text-gray-700">{hotel.name}</h2>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-yellow-500">{hotel.rating} ⭐</p>
                <p className="text-gray-600">
                  {hotel.datesOfTravel.map((date) => formatDate(date)).join(' - ')}
                </p>
                <Link to={`/hotels/${hotel.id}`} className="text-blue-500 hover:underline">
                  Details
                </Link>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="text-center text-gray-500 mt-6">
          No hotels found. Adjust your search or filter criteria.
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'} rounded-md`}
        >
          Previous
        </button>
        <span className='text-black'>
          Page {currentPage} of {totalPages || 1}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || totalPages === 0}
          className={`px-4 py-2 ${
            currentPage === totalPages || totalPages === 0
              ? 'bg-gray-300'
              : 'bg-blue-500 text-white'
          } rounded-md`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HotelsList;
