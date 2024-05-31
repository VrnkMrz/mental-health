import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './modules/Login';
import EmotionalDiary from './modules/EmotionalDiary';
import DiaryPage from './modules/DiaryPage';
import CalendarPage from './modules/CalendarPage';
import UserInfo from './modules/UserInfo'

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    <Router>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/diary" element={<EmotionalDiary />} />
          <Route path="/entries" element={<DiaryPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/userinfo" element={<UserInfo />} />
        </Routes>
      </React.StrictMode>
    </Router>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
