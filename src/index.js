import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import CityList from './Components/City/City';
import CityDetails from './Components/CityDetails/CityDetails';

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
