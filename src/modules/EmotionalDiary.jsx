import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBBtn, MDBCol, MDBInput, MDBIcon, MDBCard, MDBCardBody } from 'mdbreact';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import uk from 'date-fns/locale/uk';
import { useNavigate } from 'react-router-dom';
import '../css/EmotionalDiary.css';

registerLocale('uk', uk);

function EmotionalDiary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [emotion, setEmotion] = useState('');
  const [note, setNote] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/entries');
  };

  return (
    <MDBContainer fluid className="diary-container">
    <MDBRow className="justify-content-center">
      <MDBCol md="6">
        <MDBCard className='bg-dark text-white'>
          <MDBCardBody className='p-5 mx-auto w-100'>
            <h2 className="text-center">Як ти?</h2>
            <div className="date-picker">
            <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd MMMM, yyyy"
                  locale="uk" 
                  className="form-control"
                />
            </div>
            <div className="emotion-picker">
              <MDBRow className="text-center">
                <MDBCol>
                  <MDBIcon far icon="smile" size="2x" onClick={() => setEmotion('прекрасно')} className={`emotion-icon ${emotion === 'прекрасно' ? 'selected' : ''}`} />
                  <p>прекрасно</p>
                </MDBCol>
                <MDBCol>
                  <MDBIcon far icon="smile-beam" size="2x" onClick={() => setEmotion('добре')} className={`emotion-icon ${emotion === 'добре' ? 'selected' : ''}`} />
                  <p>добре</p>
                </MDBCol>
                <MDBCol>
                  <MDBIcon far icon="meh" size="2x" onClick={() => setEmotion('так собі')} className={`emotion-icon ${emotion === 'так собі' ? 'selected' : ''}`} />
                  <p>так собі</p>
                </MDBCol>
                <MDBCol>
                  <MDBIcon far icon="frown" size="2x" onClick={() => setEmotion('погано')} className={`emotion-icon ${emotion === 'погано' ? 'selected' : ''}`} />
                  <p>погано</p>
                </MDBCol>
                <MDBCol>
                  <MDBIcon far icon="sad-cry" size="2x" onClick={() => setEmotion('жахливо')} className={`emotion-icon ${emotion === 'жахливо' ? 'selected' : ''}`} />
                  <p>жахливо</p>
                </MDBCol>
              </MDBRow>
            </div>
            <MDBInput
              type="textarea"
              label="Ваші нотатки"
              rows="5"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="custom-input"
            />
            {/* <MDBBtn outline color="pink" onClick={handleSubmit}>Продовжити</MDBBtn> */}
            <div className="save-button-container">
              <button className="save-button" onClick={handleSubmit}>
                <i className="fas fa-check"></i>
              </button>
              <p>Зберегти</p>
            </div>
        </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  );
};

export default EmotionalDiary;
