import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import StatisticsPage from './pages/Statistics';
import UrlRedirectHandler from './components/RedirectHandler';


export default function MainApp() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stats" element={<StatisticsPage />} />
      <Route path="/:shortcode" element={<UrlRedirectHandler />} />
    </Routes>
  );
}
