import React from 'react';
import AppRouter from './router';
import './App.css';


const App: React.FC = () => {
  return (
    <div
    className="min-h-screen bg-fixed bg-cover bg-center"
    style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }} // Replace with your image URL
  >
    <div className="bg-white/70 min-h-screen">
    <AppRouter />;
    </div>
    </div>
    );
};

export default App;
