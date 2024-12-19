const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

  const hotels = [
    

    {
      "id": 1,
      "name": "Seaside Paradise",
      "location": "Maldives",
      "rating": 4.9,
      "MainimageUrl": "/src/assets/1/hotel1.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],
      "datesOfTravel": [
        "2024-01-01",
        "2024-01-07"
      ],
      "boardBasis": "All Inclusive",
      "rooms": [
        {
          "roomType": "Deluxe Suite",
          "amount": 5
        },
        {
          "roomType": "Family Room",
          "amount": 3
        }
      ]
    },
    {
      "id": 2,
      "name": "Mountain Retreat",
      "location": "Swiss Alps",
      "rating": 4.7,
      "MainimageUrl": "src/assets/2/hotel2.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],     
      "datesOfTravel": [
        "2024-02-15",
        "2024-02-22"
      ],
      "boardBasis": "Bed & Breakfast",
      "rooms": [
        {
          "roomType": "Standard Room",
          "amount": 10
        }
      ]
    },
    {
      "id": 3,
      "name": "Urban Oasis",
      "location": "New York City, USA",
      "rating": 4.5,
      "MainimageUrl": "src/assets/3/hotel3.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],
      "datesOfTravel": [
        "2024-03-10",
        "2024-03-17"
      ],
      "boardBasis": "Room Only",
      "rooms": [
        {
          "roomType": "Luxury Suite",
          "amount": 2
        },
        {
          "roomType": "Standard Room",
          "amount": 20
        }
      ]
    },
    {
      "id": 4,
      "name": "Desert Dream",
      "location": "Dubai, UAE",
      "rating": 4.8,
      "MainimageUrl": "src/assets/4/hotel4.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],
      "datesOfTravel": [
        "2024-04-01",
        "2024-04-10"
      ],
      "boardBasis": "Half Board",
      "rooms": [
        {
          "roomType": "Luxury Villa",
          "amount": 10
        },
        {
          "roomType": "Family Room",
          "amount": 5
        }
      ]
    },
    {
      "id": 5,
      "name": "Tropical Escape",
      "location": "Bali, Indonesia",
      "rating": 4.6,
      "MainimageUrl": "src/assets/5/hotel5.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],
      "datesOfTravel": [
        "2024-05-01",
        "2024-05-10"
      ],
      "boardBasis": "All Inclusive",
      "rooms": [
        {
          "roomType": "Beach Villa",
          "amount": 8
        },
        {
          "roomType": "Garden Room",
          "amount": 12
        }
      ]
    },
    {
      "id": 6,
      "name": "Historic Haven",
      "location": "Rome, Italy",
      "rating": 4.4,
      "MainimageUrl": "src/assets/6/hotel6.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],      
      "datesOfTravel": [
        "2024-06-01",
        "2024-06-07"
      ],
      "boardBasis": "Breakfast Included",
      "rooms": [
        {
          "roomType": "Classic Room",
          "amount": 15
        },
        {
          "roomType": "Luxury Suite",
          "amount": 5
        }
      ]
    },
    {
      "id": 7,
      "name": "Safari Lodge",
      "location": "Serengeti, Tanzania",
      "rating": 4.9,
      "MainimageUrl": "src/assets/7/hotel7.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],
      "datesOfTravel": [
        "2024-07-10",
        "2024-07-20"
      ],
      "boardBasis": "Full Board",
      "rooms": [
        {
          "roomType": "Luxury Tent",
          "amount": 10
        },
        {
          "roomType": "Family Suite",
          "amount": 3
        }
      ]
    },
    {
      "id": 8,
      "name": "Ocean Breeze",
      "location": "Gold Coast, Australia",
      "rating": 4.3,
      "MainimageUrl": "src/assets/8/hotel8.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],
      "datesOfTravel": [
        "2024-08-01",
        "2024-08-10"
      ],
      "boardBasis": "Self Catering",
      "rooms": [
        {
          "roomType": "Ocean View Suite",
          "amount": 6
        },
        {
          "roomType": "Family Room",
          "amount": 8
        }
      ]
    },
    {
      "id": 9,
      "name": "Rainforest Retreat",
      "location": "Costa Rica",
      "rating": 4.7,
      "MainimageUrl": "src/assets/9/hotel9.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],
      "datesOfTravel": [
        "2024-09-01",
        "2024-09-15"
      ],
      "boardBasis": "All Inclusive",
      "rooms": [
        {
          "roomType": "Jungle Bungalow",
          "amount": 7
        },
        {
          "roomType": "Standard Room",
          "amount": 10
        }
      ]
    },
    {
      "id": 10,
      "name": "Island Bliss",
      "location": "Hawaii, USA",
      "rating": 4.8,
      "MainimageUrl": "src/assets/10/hotel10.jpg",
      "imageUrls": [
        "src/assets/1/hotel1-1.jpg",
        "src/assets/1/hotel1-2.jpg",
        "src/assets/1/hotel1-3.jpg"
      ],
      "datesOfTravel": [
        "2024-10-01",
        "2024-10-10"
      ],
      "boardBasis": "Full Board",
      "rooms": [
        {
          "roomType": "Beachfront Suite",
          "amount": 12
        },
        {
          "roomType": "Standard Room",
          "amount": 15
        }
      ]
    }
  ];


app.get('/api/hotels', (req, res) => {
  res.json(hotels);
});

app.get('/api/hotels/:id', (req, res) => {
  const hotelId = parseInt(req.params.id); 
  const hotel = hotels.find(h => h.id === hotelId); 

  if (hotel) {
    res.json(hotel); 
  } else {
    res.status(404).json({ error: 'Hotel not found' }); 
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
