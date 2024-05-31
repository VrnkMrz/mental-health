import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import '../css/EmotionCalendar.css'; 
import Footer from './Footer'

const EmotionCalendar = ({ monthData }) => {
  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const day = date.getDate();
      const emotionData = monthData.find(d => d.date === day);
      if (emotionData) {
        return <span className={`emoji emoji-${emotionData.emotion}`}>{emotionData.emoji}</span>;
      }
    }
    return null;
  };

  return (
    <div className="emotion-calendar">
      <Calendar
        tileContent={tileContent}
      />
      <Footer/>
    </div>
  );
};

export default EmotionCalendar;
