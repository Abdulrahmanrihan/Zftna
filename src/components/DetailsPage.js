import React, { useState } from 'react';

// Business Details Page Component
function DetailsPage({ category, items, onBuy }) {
    const [filters, setFilters] = useState({ location: '', price: '', date: '' });
  
    const filteredItems = items.filter(
      (item) =>
        (!filters.location || item.location === filters.location) &&
        (!filters.price || item.price <= parseInt(filters.price)) &&
        (!filters.date || item.availableDates.includes(filters.date))
    );
  
    return (
      <div className="bg-gray-50 min-h-screen p-8">
        <h2 className="text-3xl font-bold text-pink-600">{category}</h2>
        <div className="flex items-center space-x-4 mt-6">
          <label className="flex flex-col text-gray-700">
            Location:
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="border border-gray-300 rounded p-2 mt-2"
            >
              <option value="">All</option>
              <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
            </select>
          </label>
          <label className="flex flex-col text-gray-700">
            Max Price:
            <input
              type="number"
              value={filters.price}
              onChange={(e) => setFilters({ ...filters, price: e.target.value })}
              className="border border-gray-300 rounded p-2 mt-2"
            />
          </label>
                {category == "Extras" ? <div></div> : <label className="flex flex-col text-gray-700">
                    Date:
                    <input
                        type="date"
                        value={filters.date}
                        onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                        className="border border-gray-300 rounded p-2 mt-2"
                    />
                </label>
            }
        </div>
        <ul className="mt-6 space-y-4">
          {filteredItems.map((item) => (
            <li key={item.id} className="border-b border-gray-300 pb-4 flex justify-between items-center">
              <span className="font-bold text-gray-700">{item.name}</span> - {item.location} - <span className="text-pink-600">${item.price}</span>
              <button 
                onClick={() => onBuy(item)}
                className="bg-pink-600 text-white rounded px-4 py-2">
                Buy
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default DetailsPage;
