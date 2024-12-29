import React, { useState } from 'react';

// Payment Modal Component
function PaymentModal({ item, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment Data:', { ...formData, item });
    setSuccess(true);
    setTimeout(onClose, 2000); // Close modal after 2 seconds
  };

  // Handle clicking outside the modal to close it
  const handleBackdropClick = (e) => {
    // Close the modal only if the click is on the backdrop (not on the modal itself)
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={handleBackdropClick} // Clicking outside modal will close it
    >
      <div className="bg-white p-8 rounded shadow-md w-96" onClick={(e) => e.stopPropagation()}>
        {success ? (
          <p className="text-green-600 text-center">Thank you! Your payment was successful.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-700 text-center">Buy {item.name}</h2>

            <label className="flex flex-col text-gray-700">
              Name:
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border border-gray-300 rounded p-2 mt-2"
              />
            </label>

            <label className="flex flex-col text-gray-700">
              Email:
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border border-gray-300 rounded p-2 mt-2"
              />
            </label>

            <label className="flex flex-col text-gray-700">
              Cardholder Name:
              <input
                type="text"
                value={formData.cardholderName}
                onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                required
                className="border border-gray-300 rounded p-2 mt-2"
              />
            </label>

            <label className="flex flex-col text-gray-700">
              Card Number:
              <input
                type="text"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                required
                className="border border-gray-300 rounded p-2 mt-2"
                maxLength="16" // Limit card number to 16 digits
              />
            </label>

            <div className="flex space-x-4">
              <label className="flex flex-col text-gray-700 w-1/2">
                Expiry Date:
                <input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                  required
                  className="border border-gray-300 rounded p-2 mt-2"
                  placeholder="MM/YY"
                  maxLength="5" // Example: 12/25
                />
              </label>

              <label className="flex flex-col text-gray-700 w-1/2">
                CVV:
                <input
                  type="text"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                  required
                  className="border border-gray-300 rounded p-2 mt-2"
                  maxLength="3" // CVV is usually 3 digits
                />
              </label>
            </div>

            <button type="submit" className="bg-pink-600 text-white rounded px-6 py-2 w-full">
              Submit Payment
            </button>
          </form>
        )}

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default PaymentModal;
