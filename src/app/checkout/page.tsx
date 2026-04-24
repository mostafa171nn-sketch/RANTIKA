"use client"

import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function CheckoutPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    shippingAddress: '',
    city: '',
    governorate: '',
    paymentMethod: ''
  });

  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return sum + (isNaN(price) ? 0 : price * item.quantity);
  }, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle checkout logic
    console.log('Checkout data:', formData, 'Cart:', cart, 'Total:', total);
    alert('Order placed! (Demo)');
  };

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 max-w-6xl mx-auto ">
      <h1 className="chek text-4xl md:text-5xl font-black text-center mt-10  mb-4 font-playfair box from-top" style={{
        fontSize:'552%',
        background: 'linear-gradient(135deg, #f5d0d6 0%, #f7a4ce 50%, #fcaed2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Checkout
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">
        {/* Cart Summary */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl mt-6">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border-b border-gray-100">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-rose-300 font-bold">{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              updateQuantity(item.id, item.quantity - 1);
                            }
                          }}
                          className={`p-1 rounded transition-colors text-xs ${
                            item.quantity > 1 
                              ? 'hover:bg-gray-200' 
                              : 'opacity-50 cursor-not-allowed'
                          }`}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-3 font-semibold text-sm min-w-[30px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors text-xs"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between text-2xl font-black">
                  <span>Total:</span>
                  <span className="text-rose-300">{total.toLocaleString()} EGP</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Checkout Form - Using exact Uiverse style */}
        <div className="container mx-auto max-w-md ">
          <div className="heading  ">Checkout</div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              placeholder="Full Name"
              id="fullName"
              name="fullName"
              type="text"
              className="input"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <input
              placeholder="Phone Number"
              id="phone"
              name="phone"
              type="tel"
              className="input"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              placeholder="Shipping Address"
              id="shippingAddress"
              name="shippingAddress"
              type="text"
              className="input"
              value={formData.shippingAddress}
              onChange={handleInputChange}
              required
            />
            <select
              name="city"
              className="input"
              value={formData.city}
              onChange={handleInputChange}
              required
            >
              <option value="">Select City</option>
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Luxor">Luxor</option>
              <option value="Aswan">Aswan</option>
              <option value="Aswan">Sharm El Sheikh</option>
              <option value="Hurghada">Hurghada</option>
              <option value="Sohag">Sohag</option>
              <option value="Qena">Qena</option>
              <option value="Aswan">Aswan</option>
            </select>
            <input
              placeholder="Governorate"
              id="governorate"
              name="governorate"
              type="text"
              className="input"
              value={formData.governorate}
              onChange={handleInputChange}
              required
            />
            <div className="space-y-3 mb-4 mt-5 ml-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  className="mr-2"
                  onChange={handleInputChange}
                  required
                />
                Cash on Delivery
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="visa"
                  className="mr-2"
                  onChange={handleInputChange}
                />
                Visa/Mastercard
              </label>
            </div>
            {formData.paymentMethod === 'visa' && (
              <div className="space-y-3 mb-4 p-4 bg-gray-50 rounded-2xl">
                <div className="text-lg font-bold text-gray-800 mb-3">Card Details</div>
                <input
                  placeholder="Card Number"
                  name="cardNumber"
                  type="number"
                  className="input"
                  onChange={handleInputChange}
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    placeholder="Expiry Date (MM/YY)"
                    name="expiryDate"
                    className="input"
                    onChange={handleInputChange}
                  />
                  <input
                    placeholder="CVV"
                    name="cvv"
                    className="input"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            )}
            <input value="Place Order" type="submit" className="login-button" />
          </form>
        </div>
      </div>

      <style jsx global>{`
        /* Exact Uiverse CSS adapted for Tailwind project */
        .container {
          max-width: 520px;
          background: #f8f9fd;
          background: linear-gradient(
            0deg,
            rgb(255, 255, 255) 0%,
            rgb(244, 247, 251) 100%
          );
          border-radius: 40px;
          padding: 25px 35px;
          border: 5px solid rgb(255, 255, 255);
          box-shadow: rgba(235, 235, 235, 0.88) 0px 30px 30px -20px;
          margin: 20px auto;
        }
        .heading {
          text-align: center;
          font-weight: 900;
          font-size: 30px;
          color: rgb(0, 0, 0);
        }
        .form {
          margin-top: 20px;
        }
        .form .input {
          width: 100%;
          background: white;
          border: none;
          padding: 15px 20px;
          border-radius: 20px;
          margin-top: 15px;
          box-shadow: #fcd2f5 0px 10px 10px -5px;
          border-inline: 2px solid transparent;
        }
        .form .input::-moz-placeholder {
          color: rgb(170, 170, 170);
        }
        .form .input::placeholder {
          color: rgb(170, 170, 170);
        }
        .form .input:focus {
          outline: none;
          border-inline: 2px solid #d112c1;
        }
        .form .login-button {
          display: block;
          width: 100%;
          font-weight: bold;
          background: linear-gradient(
            45deg,
            rgb(204, 16, 211) 0%,
            rgb(209, 18, 193) 100%
          );
          color: white;
          padding-block: 15px;
          margin: 20px auto;
          border-radius: 20px;
          box-shadow: rgba(215, 133, 215, 0.88) 0px 20px 10px -15px;
          border: none;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
        }
        .form .login-button:hover {
          transform: scale(1.03);
          box-shadow: rgba(215, 133, 208, 0.88) 0px 23px 10px -20px;
        }
        .form .login-button:active {
          transform: scale(0.95);
          box-shadow: rgba(215, 133, 208, 0.88) 0px 15px 10px -10px;
        }
      `}</style>
    </div>
  );
}

