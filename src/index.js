import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import CityList from './City';
import CityDetails from './CityDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/cityList/:cityName" element={<CityDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
