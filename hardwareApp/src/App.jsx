import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InventoryProvider } from './context/InventoryContext';
import { OrderProvider } from './context/OrderContext';
import Navbar from './components/navbar';
import Dashboard from './pages/dashboard';
import Inventory from './pages/inventory';
import Users from './pages/users';
import CustomerOrders from './pages/customerOrders';
import POS from './pages/POS';
import SalesReport from './pages/salesReport';
import CashierSales from './pages/cashiersales';
import Login from './pages/Login'; // <-- Import the login page
import OrderingApp from './pages/OrderingApp'; // <-- Import the ordering app

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ordering" element={<OrderingApp />} /> {/* <-- Baba Ordering App - outside context providers */}
        <Route path="/*" element={
          <InventoryProvider>
            <OrderProvider>
              <Routes>
                <Route path="/" element={<Login />} /> {/* <-- Login page as root */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/users" element={<Users />} />
                <Route path="/customer-orders" element={<CustomerOrders />} />
                <Route path="/pos" element={<POS />} />
                <Route path="/salesReport" element={<SalesReport />} />
                <Route path="/sales" element={<CashierSales />} />
              </Routes>
            </OrderProvider>
          </InventoryProvider>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
