import React, { useCallback, useEffect } from "react";

import Form from "react-bootstrap/Form";
import Button from "../components/Button";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaStarOfLife } from "react-icons/fa6";

const ConfirmedBooking = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitHandler();
  };

  const moveBack = useCallback(() => {
    navigate("/booking");
    props.changeStepHandler("Basic Details");
  }, [navigate, props]);

  const navigateHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!props.firstStepValidated) {
      moveBack();
    }
  }, [props.firstStepValidated, moveBack]);

  const buttonDisplay = !props.response || props.response.type === "error";

  return (
    <section className="pt-5">
      <Container className="booking-form-container pb-5">
        <Row>
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
            <Form
              noValidate
              onSubmit={handleSubmit}
              className="pt-5 booking-form"
            >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label required>
                    First Name{" "}
                    <FaStarOfLife size={10} className="text-danger mb-1" />
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    className="custom-input"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.changeFirstNameHandler}
                    onBlur={props.firstNameBlurHandler}
                  />
                  {props.firstNameError && (
                    <div className="text-danger">{props.firstNameError}</div>
                  )}
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>
                    Last Name{" "}
                    <FaStarOfLife size={10} className="text-danger mb-1" />
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    className="custom-input"
                    name="lastName"
                    value={props.lastName}
                    onChange={props.changeLastNameHandler}
                    onBlur={props.lastNameBlurHandler}
                  />
                  {props.lastNameError && (
                    <div className="text-danger">{props.lastNameError}</div>
                  )}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>
                    Email{" "}
                    <FaStarOfLife size={10} className="text-danger mb-1" />
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    className="custom-input"
                    name="email"
                    value={props.email}
                    onChange={props.changeEmailHandler}
                    onBlur={props.emailBlurHandler}
                  />
                  {props.emailError && (
                    <div className="text-danger">{props.emailError}</div>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>
                    Phone Number{" "}
                    <FaStarOfLife size={10} className="text-danger mb-1" />
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    className="custom-input"
                    name="phoneNumber"
                    value={props.phoneNumber}
                    onChange={props.changePhoneNumberHandler}
                    onBlur={props.phoneNumberBlurHandler}
                  />
                  {props.phoneNumberError && (
                    <div className="text-danger">{props.phoneNumberError}</div>
                  )}
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Special Requests </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Comments"
                    className="custom-input"
                    name="specialRequests"
                    value={props.specialRequests}
                    onChange={props.changeSpecialRequestsHandler}
                    onBlur={props.specialRequestsBlurHandler}
                  />
                  {props.specialRequestsError && (
                    <div className="text-danger">
                      {props.specialRequestsError}
                    </div>
                  )}
                </Form.Group>
              </Row>

              <div
                className={`${
                  buttonDisplay ? "d-flex justify-content-between" : "d-none"
                } `}
              >
                <Button
                  type="submit"
                  title="Submit"
                  style={{ border: "1px solid black" }}
                  className="px-3"
                  loading={props.isLoading}
                />
                <Button
                  type="button"
                  title="Back"
                  style={{ border: "1px solid black" }}
                  className="px-3"
                  onClick={moveBack}
                />
              </div>

              <div
                className={`${
                  !buttonDisplay ? "d-flex justify-content-end" : "d-none"
                } `}
              >
                <Button
                  type="button"
                  title="Home"
                  style={{ border: "1px solid black" }}
                  className="px-3"
                  onClick={navigateHome}
                />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ConfirmedBooking;
