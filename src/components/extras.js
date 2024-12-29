import React, { useState } from 'react';
import DetailsPage from './DetailsPage';

// Sample Data (Database Arrays)
const data = {
  weddingHalls: [
    { id: 1, name: 'Grand Hall', location: 'Cairo', capacity: 500, price: 2000 },
    { id: 2, name: 'Elegant Venue', location: 'Alexandria', capacity: 300, price: 1500 },
  ],
  cars: [
    { id: 1, name: 'Luxury Sedan', location: 'Cairo', type: 'Sedan', price: 300 },
    { id: 2, name: 'Classic Limo', location: 'Alexandria', type: 'Limo', price: 500 },
  ],
  bouquets: [
    { id: 1, name: 'Rose Delight', location: 'Cairo', size: 'Large', price: 100 },
    { id: 2, name: 'Tulip Charm', location: 'Alexandria', size: 'Medium', price: 80 },
  ],
};

// Extras Page Component
function ExtrasPage({ onBuy }) {
  const extras = [...data.cars, ...data.bouquets];
  return <DetailsPage category="Extras" items={extras} onBuy={onBuy} />;
}

export default ExtrasPage;
