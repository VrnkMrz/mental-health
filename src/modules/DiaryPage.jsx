import React from 'react';
import Footer from './Footer';
import DiaryEntry from './DiaryEntry';

const DiaryPage = () => {
  const entries = [
    { id: 1, date: "П'ятниця, 24 Травня", time: "12:15", emotion: "добре", message: "Це ваш перший запис. Давайте записуємо щось в історії!" }
  ];

  return (
    <div className="diary-page">
      {entries.map(entry => (
        <DiaryEntry
          key={entry.id}
          date={entry.date}
          time={entry.time}
          emotion={entry.emotion}
          message={entry.message}
        />
      ))}
      <Footer/>
    </div>
  );
};

export default DiaryPage;
