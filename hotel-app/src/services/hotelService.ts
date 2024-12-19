import axios from 'axios';
import { Hotel } from '../types/types';

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchHotels = async (): Promise<Hotel[]> => {
  const response = await axios.get(`${apiUrl}/hotels`);
  return response.data;
};

export const fetchHotelById = async (id: any): Promise<Hotel> => {
  console.log(`${apiUrl}/hotels/${id}`)
  const response = await axios.get(`${apiUrl}/hotels/${id}`);
  return response.data;
};
