export interface Room {
    roomType: string;
    amount: number;
  }
  
export interface Hotel {
    id: number;
    name: string;
    location: string;
    rating: number;
    MainimageUrl: string;
    imageUrls:[]
    boardBasis: string;
    rooms: Room[];
  }
  