import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../assets/logo1.png';
import admin from '../assets/Admin1.png';
import notif from '../assets/notif.png';
import './navbarcashier.css';
import CashierSales from '../pages/cashiersales'

const NavbarCashier = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate(); 

  const menuItems = [
    { to: "/pos", icon: "fas fa-tachometer-alt", label: "POS" },
    { to: "/sales", icon: "fas fa-cash-register", label: "Sales" },
    { to: "/cashier-reservations", icon: "fas fa-clipboard-list", label: "Customer Reservations" },
  ];

  const [currentTime, setCurrentTime] = useState(new Date());
  const [showNotification, setShowNotification] = useState(false);
  
  const notifications = [
    {
      id: 1,
      title: 'Important Notice',
      message: 'I will not get this product:',
      customer: 'John Doe',
      reservation: 'RSV-9KKS0J',
      created: '9/4/2025, 3:26:59 PM',
      items: [
        { name: 'Switch', color: 'White', quantity: 1, price: 799.00 }
      ],
      read: false
    }
  ];

  const handleLogout = () => {
    navigate('/'); 
  };
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentTime(new Date());
  }, 1000); 

  return () => clearInterval(interval); 
}, []);

const formattedTime = currentTime.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
});


  return (
    <div className="min-h-screen flex flex-col" data-theme="autumn">
      {/* Top Navbar */}
      <header className="navbar flex justify-between items-center p-3 text-white custom-header sticky top-0 z-20">
        <div className="flex items-center gap-2">
          {/* Hamburger button on mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>

          <img src={logo} alt="Logo" className="h-8 w-8 ml-2" />
          <span className="text-lg font-bold ps-2">Hardware</span>
        </div>

        {/* Right side content */}
        <div className="flex items-center space-x-2 text-sm sm:text-base">
          <div className="relative">
            <button 
              onClick={() => setShowNotification(!showNotification)}
              className="relative"
            >
              <img src={notif} alt="notif" className="h-8 w-8" />
              {notifications.some(n => !n.read) && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center text-white text-xs">
                  {notifications.filter(n => !n.read).length}
                </span>
              )}
            </button>
            
            {showNotification && (
              <div className="fixed sm:absolute right-2 left-2 sm:left-auto sm:w-96 mt-2 bg-white rounded-lg shadow-xl overflow-hidden z-50 border border-gray-200 max-h-[80vh] overflow-y-auto">
                <div className="p-4 bg-gradient-to-r from-red-600 to-red-700 sticky top-0">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-white text-lg">Order Update</h3>
                    <button 
                      onClick={(e) => { e.stopPropagation(); setShowNotification(false); }}
                      className="text-white hover:text-gray-200 focus:outline-none"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>
                {notifications.map(notification => (
                  <div key={notification.id} className="p-5 border-b hover:bg-red-50 transition-colors duration-200">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold text-red-700">{notification.title}</h4>
                          <span className="text-xs text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                            New
                          </span>
                        </div>
                        <p className="text-gray-700 mt-1 leading-relaxed">
                          {notification.message}
                        </p>
                        <div className="mt-3 p-4 bg-red-50 border-l-4 border-red-400 rounded-r">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium text-gray-600">Reservation #</span>
                              <span className="text-sm font-semibold">{notification.reservation}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Customer</span>
                              <span className="text-sm font-medium text-gray-800">{notification.customer}</span>
                            </div>
                            <div className="flex justify-between items-center pt-2 mt-2 border-t border-gray-100">
                              <span className="text-xs text-gray-500">Created</span>
                              <span className="text-xs font-medium text-gray-700">{notification.created}</span>
                            </div>
                            <div className="mt-3 pt-3 border-t border-gray-100">
                              <p className="text-sm font-medium text-gray-700 mb-2">Order Details:</p>
                              <ul className="space-y-2">
                                {notification.items.map((item, index) => (
                                  <li key={index} className="flex justify-between items-center bg-white p-2 rounded border border-gray-100">
                                    <div>
                                      <p className="text-sm font-medium">{item.name}</p>
                                      {item.color && <p className="text-xs text-gray-500">Color: {item.color}</p>}
                                    </div>
                                    <div className="text-right">
                                      <p className="text-sm font-medium">×{item.quantity}</p>
                                      <p className="text-sm font-semibold text-red-600">₱{item.price.toFixed(2)}</p>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-3 pt-3 border-t border-black-200 flex justify-between items-center">
                                <span className="font-semibold text-black">Total Amount:</span>
                                <span className="text-lg font-bold text-red-700">
                                  ₱{notification.items.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="p-4 bg-gray-50 border-t border-gray-200 text-center sticky bottom-0">
                  <button
                    className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                    onClick={() => setShowNotification(false)}
                  >
                    Acknowledge Notification
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <span className="font-semibold text-yellow-100">{formattedTime}</span>
          <img src={admin} alt="admin" className="h-8 w-8" />
          <span onClick={handleLogout} className="font-semibold cursor-pointer hover:underline">
            Log Out
          </span>
        </div>
      </header>

      {/* Click outside to close notification */}
      {showNotification && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowNotification(false)}
        ></div>
      )}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Mobile + Desktop) */}
        <nav
  className={`sidebar bg-[#2a313b] w-64 z-30 transform transition-transform duration-300 ease-in-out
    fixed top-16 bottom-0 md:static md:top-0 md:bottom-auto
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
>

          <div className="p-4">
            <ul className="mt-3 text-lg">
              {menuItems.map(({ to, icon, label }) => (
                <li key={to} className="mb-2">
                  <Link
                    to={to}
                    className={`block p-2 rounded hover:bg-error flex items-center ${
                      location.pathname === to ? "bg-error" : ""
                    }`}
                    onClick={() => setIsSidebarOpen(false)} // Close on mobile
                  >
                    <i className={`${icon} mr-2`}></i> {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-4 bg-base-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default NavbarCashier;
