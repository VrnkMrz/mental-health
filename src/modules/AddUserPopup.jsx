import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBRadio
} from 'mdb-react-ui-kit';
import '../css/UserInfo.css'

function AddUserPopup({ handleClose, handleSubmit }) {
  return (
    <MDBContainer fluid>
      <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>
          <MDBCardBody className='px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>
              </MDBCol>
              <MDBCol md='6' className='mb-4'>
                <h6 className="fw-bold">Gender: </h6>
                <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
                <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email'/>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='tel'/>
              </MDBCol>
            </MDBRow>
            <MDBDropdown className='mb-4'>
              <MDBDropdownToggle tag='a' className='btn btn-primary'>
                Choose option
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>Subject 1</MDBDropdownItem>
                <MDBDropdownItem link>Subject 2</MDBDropdownItem>
                <MDBDropdownItem link>Subject 3</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBRow>
              <MDBCol md='6'>
                <MDBBtn className='mb-4  margin-right' size='lg' onClick={handleSubmit}>Submit</MDBBtn>
                <MDBBtn className='mb-4' color='secondary' size='lg' onClick={handleClose}>Close</MDBBtn>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default AddUserPopup;
