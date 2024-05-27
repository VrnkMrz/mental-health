import React from 'react';
import '../css/DiaryEntry.css';

const DiaryEntry = ({ date, time, emotion, message }) => {
  return (
    <div className="diary-entry">
      <div className="diary-date-time">
        <div className="diary-date">{date}</div>
        <div className="diary-time">{time}</div>
      </div>
      <div className="diary-emotion">{emotion}</div>
      <p className="diary-message">{message}</p>
    </div>
  );
};

export default DiaryEntry;
