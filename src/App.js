import React, { useState } from 'react';
import './components/App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import DetailsPage from './components/DetailsPage';
import MissionVision from './components/MissionVision';
import PaymentModal from './components/PaymentForm';
import ExtrasPage from './components/extras';

const data = {
  weddingHalls: [
    { id: 1, name: 'Cyberia Wedding Hall', location: 'Cairo', capacity: 400, price: 2500, availableDates: ['2024-06-15', '2024-06-22', '2024-07-01'] },
    { id: 2, name: 'Sonesta Hotel Tower Cairo', location: 'Cairo', capacity: 350, price: 3000, availableDates: ['2024-05-05', '2024-05-12', '2024-06-10'] },
    { id: 3, name: '7 Sky Cairo', location: 'Cairo', capacity: 250, price: 1800, availableDates: ['2024-04-20', '2024-05-15', '2024-06-01'] },
    { id: 4, name: 'Al Fairoz Wedding Hall', location: 'Cairo', capacity: 500, price: 3500, availableDates: ['2024-06-10', '2024-07-05', '2024-08-20'] },
    { id: 5, name: 'Aida Wedding Hall', location: 'Alexandria', capacity: 300, price: 2000, availableDates: ['2024-06-01', '2024-06-15', '2024-07-10'] }
  ],
  cars: [
    { id: 1, name: 'Luxury Sedan', location: 'Cairo', type: 'Sedan', price: 300, availableDates: ['2024-06-15', '2024-07-01', '2024-07-10'] },
    { id: 2, name: 'Classic Limo', location: 'Alexandria', type: 'Limo', price: 500, availableDates: ['2024-05-12', '2024-06-10', '2024-07-05'] }
  ],
  bouquets: [
    { id: 1, name: 'Rose Delight', location: 'Cairo', size: 'Large', price: 100, availableDates: ['2024-06-15', '2024-06-22', '2024-07-01'] },
    { id: 2, name: 'Tulip Charm', location: 'Alexandria', size: 'Medium', price: 80, availableDates: ['2024-05-15', '2024-06-10', '2024-07-20'] }
  ]
};
// App Component
function App() {
  const [modalItem, setModalItem] = useState(null);

  const handleBuy = (item) => {
    setModalItem(item);
  };

  const handleCloseModal = () => {
    setModalItem(null);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-pink-600 text-white p-4 flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/mission" className="hover:underline">Mission & Vision</Link>
          <Link to="/wedding-halls" className="hover:underline">Wedding Halls</Link>
          <Link to="/extras" className="hover:underline">Extras</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mission" element={<MissionVision />} />
          <Route
            path="/wedding-halls"
            element={<DetailsPage category="Wedding Halls" items={data.weddingHalls} onBuy={handleBuy} />}
          />
          <Route path="/extras" element={<ExtrasPage onBuy={handleBuy} />} />
        </Routes>
        {modalItem && <PaymentModal item={modalItem} onClose={handleCloseModal} />}
      </div>
    </Router>
  );
}

export default App;
