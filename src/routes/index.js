import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PollsPage from '../pages/PollsPage';
import AllHands from '../pages/AllHands';
import WelcomePage from '../pages/Welcome';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/polls" element={<PollsPage />} />
        <Route path="/allhands" element={<AllHands />} />
    </Routes>
  );
};

export default AppRoutes;
