import React, { useEffect, useState } from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Footer from "./Footer";
import AddUserPopup from './AddUserPopup';

const MySwal = withReactContent(Swal);

export default function UserInfo() {
  const [rank, setRank] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const mockRank = 'Капітан';
      setRank(mockRank);
    }, 100); // Затримка 1 секунда
  }, []);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSubmit = () => {
    MySwal.fire({
      title: 'Відправлено!',
      text: 'Ви додали користувача',
      icon: 'success',
      confirmButtonText: 'Закрити'
    }).then(() => {
      handleClosePopup();
    });
  };

  return (
    <>
      <MDBContainer className="py-5"> 
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="bg-dark text-white mb-4" style={{ backgroundColor: '#333' }}>
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="mb-1">Full Stack Developer</p>
              </MDBCardBody>
            </MDBCard>
            <div className="d-flex justify-content-center mb-2">
                  {rank === 'Капітан' && (
                    <MDBBtn className='add_user_btn' onClick={handleOpenPopup}>Add user</MDBBtn>
                  )}
                </div>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="bg-dark text-white mb-4" style={{ backgroundColor: '#333' }}>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="">Johnatan Smith</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="">(098) 765-4321</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        {isPopupOpen && (
          <div className="popup">
            <AddUserPopup handleClose={handleClosePopup} handleSubmit={handleSubmit} />
          </div>
        )}
      </MDBContainer>
      <Footer />
    </>
  );
}
