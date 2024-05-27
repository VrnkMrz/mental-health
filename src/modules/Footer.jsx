import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from 'mdbreact';
import '../css/Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/diary');
  };


  return (
    <MDBFooter className="footer">
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center">
          <MDBCol size="2" className="text-center">
            <MDBIcon icon="book" size="2x" className="footer-icon" />
            <p>Записи</p>
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
            <MDBIcon icon="calendar-alt" size="2x" className="footer-icon" />
            <p>Календар</p>
          </MDBCol>
          <MDBCol size="2" className="text-center">
            <MDBIcon icon="ellipsis-h" size="2x" className="footer-icon" />
            <p>Більше</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
