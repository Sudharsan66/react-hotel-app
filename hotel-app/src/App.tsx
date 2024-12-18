import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css'
import HotelList from './pages/HotelList';
import HotelDetails from './pages/HotelDetails';


function App() {
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HotelList />} />
      <Route path="/hotels" element={<HotelDetails />} />
    </Routes>
  </Router>
  )
}


export default App
