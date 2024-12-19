export type Room = {
  roomType: string;
  amount: number;
};

export type Hotel = {
  id: number;
  name: string;
  location: string;
  rating: number;
  MainimageUrl: string;
  datesOfTravel: string[];
  boardBasis: string;
  rooms: Room[];
};
