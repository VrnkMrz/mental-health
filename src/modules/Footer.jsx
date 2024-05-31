import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import '../css/Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/diary');
  };

  const handleCalendar = () => {
    navigate('/calendar');
  };

  const handleEntries = () => {
    navigate('/entries');
  };

  const handleAccount = () => {
    navigate('/userinfo');
  };

  return (
    <MDBFooter className="footer">
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol size="2" className="text-center">
          <button className="footer-btn" onClick={handleEntries}>
            <MDBIcon icon="book" size="2x" className="footer-icon" />
            <p>Записи</p>
            </button>
          </MDBCol>
          <MDBCol size="2" className="text-center">
            <MDBIcon icon="chart-bar" size="2x" className="footer-icon" />
            <p>Статистика</p>
          </MDBCol>
          <MDBCol size="2" className="text-center">
             <button className="footer-add-btn" onClick={handleAdd}>
              <MDBIcon icon="plus" size="2x" />
            </button>
          </MDBCol>
          <MDBCol size="2" className="text-center">
            <button className="footer-btn" onClick={handleCalendar}>
            <MDBIcon icon="calendar-alt" size="2x" className="footer-icon" />
            <p>Календар</p>
            </button>
          </MDBCol>
          <MDBCol size="2" className="text-center">
          <button className="footer-btn" onClick={handleAccount}>
            <MDBIcon icon="user" size="2x" className="footer-icon" />
            <p>Акаунт</p>
            </button>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
