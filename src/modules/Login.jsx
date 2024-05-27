import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/Login.css";


function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/diary');
  };

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Вхід</h2>
              <p className="text-white-50 mb-5">Будь ласка, введіть свій логін та пароль</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Пошта' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Пароль' id='formControlLg' type='password' size="lg"/>

              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleLogin}>
                Вхід
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;