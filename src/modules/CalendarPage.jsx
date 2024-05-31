import React from 'react';
import EmotionCalendar from './EmotionalCalendar';

const CalendarPage = () => {
  const monthData = [
    { date: 24, emotion: 'smile', emoji: '😊' },
    { date: 10, emotion: 'sad', emoji: '😢' }
  ];

  return (
    <div className="App">
      <EmotionCalendar monthData={monthData} />
    </div>
  );
};

export default CalendarPage;
