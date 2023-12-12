import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import Footer from '../components/Footer'

export default function PaymentPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);
  const {
    cart: { shippingAddress },
  } = state;

  // You can use similar state management for payment details
  const [paymentMethod, setPaymentMethod] = useState('');

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Handle payment submission logic
    // For example, dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod });
    navigate('/placeorder');
  };

  const goBackToHome = () => {
    navigate('/');
  };

  return (
    <div>
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <div className="container small-container">
        <h1 className="my-3">Payment</h1>
        <Form onSubmit={submitHandler}>
          {/* Add your payment form fields and logic here */}
          <Form.Group className="mb-3" controlId="paymentMethod">
            <Form.Label>Payment Method</Form.Label>
            <Form.Control
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            />
          </Form.Group>

          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>

        {/* Go Back to Home Button */}
        <div className="mb-3">
          <Button variant="secondary" onClick={goBackToHome}>
            Go Back to Home
          </Button>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
