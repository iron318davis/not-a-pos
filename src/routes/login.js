import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CompleteNavbar from './../components/CompleteNavbar'

import { Col, Container, Row } from 'react-bootstrap';
import NumPad from './../components/NumPad';
import './loginstyle.css';
 
function Login() {
  const [pin, setPin] = useState(``);

  const handleBtnInput = event => {
    event.preventDefault();
    const { value } = event.target;
    setPin(pin + value);
  };
 
  const handleDelete = () => {
    if (pin.length > 0) {
      let pinStr = pin;
      pinStr = pinStr.slice(0, -1);
      setPin(pinStr);
    }
  };

  const buttons = [
    [{name: `1`},{name: `2`},{name: `3`}],[{name: `4`},{name: `5`},{name: `6`}],[{name: `7`},{name: `8`},{name: `9`}],
    [{name: <i className='fas fa-backspace del-btn'></i>,value: `del`},{name: `0`},{name: <i className='fas fa-sign-in-alt submit-btn'></i>,value: `login`}]
  ];

  const props = {
    pin: pin,
    setPin: setPin,
    delete: handleDelete,
    buttonInput: handleBtnInput,
    buttons: buttons
  };

    return(
        <div>
        <CompleteNavbar />
        
        <Container className='text-center mt-5' id='home-container'>
        <Row>
          <Col className='py-3'>
            <NumPad {...props} />
          </Col>
        </Row>

      </Container>
      </div>
    )
};

export default Login;