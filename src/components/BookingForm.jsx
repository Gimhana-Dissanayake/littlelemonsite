import React, { forwardRef } from "react";
import "./BookingForm.css";
import Form from "react-bootstrap/Form";
import Button from "./Button";
import { Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { FaStarOfLife } from "react-icons/fa6";

const BookingForm = (props) => {
  const CustomInputOne = forwardRef(({ value, onClick }, ref) => (
    <Form.Control
      required
      type="text"
      placeholder="Date"
      defaultValue="Mark"
      className="custom-input"
      onClick={onClick}
      ref={ref}
      value={value}
    />
  ));

  const CustomInputTwo = forwardRef(({ value, onClick }, ref) => (
    <Form.Control
      required
      type="text"
      placeholder="Time"
      defaultValue="Otto"
      className="custom-input"
      onClick={onClick}
      ref={ref}
      value={value}
    />
  ));

  const maxTime = new Date();
  maxTime.setHours(21, 0, 0, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit();
  };

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
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>
                    Date <FaStarOfLife size={10} className="text-danger" />
                  </Form.Label>
                  <div className="custom-input-for-date-time">
                    <DatePicker
                      selected={props.date}
                      onChange={props.changeDateHandler}
                      customInput={<CustomInputOne />}
                      minDate={new Date()}
                      value={props.date}
                      onBlur={props.dateBlurHandler}
                    />
                  </div>
                  {props.dateError && (
                    <div className="text-danger">{props.dateError}</div>
                  )}
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>
                    Time <FaStarOfLife size={10} className="text-danger" />
                  </Form.Label>
                  <div className="custom-input-for-date-time">
                    <DatePicker
                      selected={props.time}
                      onChange={props.changeTimeHandler}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={60}
                      timeCaption="Time"
                      dateFormat="h:mm aa"
                      value={props.time}
                      customInput={<CustomInputTwo />}
                      onBlur={props.timeBlurHandler}
                    />
                  </div>
                  {props.timeError && (
                    <div className="text-danger">{props.timeError}</div>
                  )}
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState" md="6">
                  <Form.Label>
                    Occation <FaStarOfLife size={10} className="text-danger" />
                  </Form.Label>
                  <Form.Select
                    defaultValue="Select occation"
                    className="custom-input"
                    onChange={(e) => {
                      props.changeOccationHandler(e.target.value);
                    }}
                    value={props.occation}
                    onBlur={props.occationBlurHandler}
                  >
                    <option>Select occation</option>
                    <option>Birthday</option>
                    <option>Aniversary</option>
                  </Form.Select>
                  {props.occationError && (
                    <div className="text-danger">{props.occationError}</div>
                  )}
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState" md="6">
                  <Form.Label>
                    Number of Diners{" "}
                    <FaStarOfLife size={10} className="text-danger" />
                  </Form.Label>
                  <Form.Select
                    defaultValue="Select dinners"
                    className="custom-input"
                    onChange={(e) => {
                      props.changeDinersHandler(e.target.value);
                    }}
                    value={props.diners}
                    onBlur={props.changeDinersBlurHandler}
                  >
                    <option>Select diners</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Form.Select>
                  {props.dinersError && (
                    <div className="text-danger">{props.dinersError}</div>
                  )}
                </Form.Group>
              </Row>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Seating <FaStarOfLife size={10} className="text-danger" />
                </Form.Label>
                <Col sm={5} className="pt-2">
                  <Form.Check
                    type="radio"
                    label="Indoor"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    checked={props.seating === "indoor"}
                    onChange={() => {
                      props.changeSeatingHandler("indoor");
                    }}
                    onBlur={props.seatingBlurHandler}
                  />
                </Col>
                <Col sm={5} className="pt-2">
                  <Form.Check
                    type="radio"
                    label="Outdoor"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    checked={props.seating === "outdoor"}
                    onChange={() => {
                      props.changeSeatingHandler("outdoor");
                    }}
                    onBlur={props.seatingBlurHandler}
                  />
                </Col>
                {props.seatingError && (
                  <div className="text-danger">{props.seatingError}</div>
                )}
              </Form.Group>

              <Button
                type="submit"
                title="Next"
                style={{ border: "1px solid black" }}
                className="px-3"
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BookingForm;
