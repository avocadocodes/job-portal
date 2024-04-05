import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import JobInfoPage from './pages/JobInfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/job-info" element={<JobInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
