import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Booking from "../pages/Booking";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
import {
  isSlotTaken,
  validEmail,
  validateDate,
  validateDiner,
  validateFirstName,
  validateFirstNameCharLength,
  validateLastName,
  validateOccation,
  validatePhoneNumber,
  validatePhoneNumberLength,
  validateSeating,
  validateSpecialRequests,
  validateTime,
} from "../utils";

const Reservation = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("Basic Details");
  const changeStepHandler = (step) => {
    setStep(step);
  };

  const slots = [
    {
      date: new Date(),
      time: 13,
    },
    {
      date: new Date(),
      time: 17,
    },
  ];

  const [state, setState] = useState(() => {
    const now = new Date();
    now.setHours(now.getHours() + 1, 0, 0, 0);

    return {
      date: new Date(),
      time: now,
      occation: "Select occation",
      diners: "Select diners",
      seating: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      specialRequests: "",
      dateError: "",
      timeError: "",
      occationError: "",
      dinersError: "",
      seatingError: "",
      firstNameError: "",
      lastNameError: "",
      emailError: "",
      phoneNumberError: "",
      specialRequestsError: "",
      firstStepValidated: false,
    };
  });

  const changefirstStepValidatedHandler = (value) => {
    setState((ps) => {
      return {
        ...ps,
        firstStepValidated: value,
      };
    });
  };

  // DATE

  const changeDateHandler = (date) => {
    setState((ps) => ({
      ...ps,
      date: date,
      dateError: "",
    }));
  };

  const dateBlurHandler = () => {
    const msg = validateDate(state.date) ? "" : "Please select a valid date";
    setState((ps) => ({
      ...ps,
      dateError: msg,
    }));
  };

  const changeDateErrorHandler = (error) => {
    setState((ps) => ({
      ...ps,
      dateError: error,
    }));
  };

  // DATE

  //  TIME

  const changeTimeHandler = (date) => {
    setState((ps) => ({
      ...ps,
      time: date,
      timeError: "",
    }));
  };

  const timeBlurHandler = () => {
    const msg = validateDate(state.time) ? "" : "Please select a valid time";
    setState((ps) => ({
      ...ps,
      timeError: msg,
    }));
  };

  const changeTimeErrorHandler = (error) => {
    setState((ps) => ({
      ...ps,
      timeError: error,
    }));
  };

  //  TIME

  // OCCATION
  const changeOccationHandler = (occation) => {
    setState((ps) => ({
      ...ps,
      occation: occation,
      occationError: "",
    }));
  };

  const occationBlurHandler = () => {
    const msg = validateOccation(state.occation)
      ? ""
      : "Please select an occation";
    setState((ps) => ({
      ...ps,
      occationError: msg,
    }));
  };

  const changeOccationErrorHandler = (error) => {
    setState((ps) => ({
      ...ps,
      occationError: error,
    }));
  };

  // OCCATION

  // DINERS
  const changeDinersHandler = (diners) => {
    setState((ps) => ({
      ...ps,
      diners: diners,
      dinersError: "",
    }));
  };

  const changeDinersBlurHandler = () => {
    const msg = validateDiner(state.diners)
      ? ""
      : "Please select number of diners";
    setState((ps) => ({
      ...ps,
      dinersError: msg,
    }));
  };

  const changeDinersErrorHandler = (error) => {
    setState((ps) => ({
      ...ps,
      dinersError: error,
    }));
  };

  // DINERS

  // SEATING
  const changeSeatingHandler = (seating) => {
    setState((ps) => ({
      ...ps,
      seating: seating,
      seatingError: "",
    }));
  };

  const seatingBlurHandler = () => {
    const msg = validateSeating(state.seating)
      ? ""
      : "Please select number of diners";
    setState((ps) => ({
      ...ps,
      seatingError: msg,
    }));
  };

  const changeSeatingErrorHandler = (error) => {
    setState((ps) => ({
      ...ps,
      seatingError: error,
    }));
  };

  // SEATING

  const handleSubmit = () => {
    const validDate = validateDate(state.date);
    const validTime = validateTime(state.time);
    const isTimeTaken = isSlotTaken(state.date, state.time, slots);
    const validOccation = validateOccation(state.occation);
    const validDiners = validateDiner(state.diners);
    const validSeating = validateSeating(state.seating);

    const validity =
      validDate &&
      validTime &&
      validOccation &&
      validDiners &&
      validSeating &&
      !isTimeTaken;

    if (!validDate) {
      changeDateErrorHandler("Please select a valid date");
    }

    if (!validTime) {
      changeTimeErrorHandler("Please select a valid time");
    }

    if (isTimeTaken) {
      changeTimeErrorHandler(
        "The selected time slot for the given date is taken!"
      );
    }

    if (!validOccation) {
      changeOccationErrorHandler("Please select an occation");
    }

    if (!validDiners) {
      changeDinersErrorHandler("Please select number of diners");
    }

    if (!validSeating) {
      changeSeatingErrorHandler("Please select preffered seating");
    }

    if (validity) {
      changefirstStepValidatedHandler(true);
      navigate("confirm");
      changeStepHandler("Confirmation");
    }
  };

  console.log("STATE> : ", state);

  const confirmationSubmitHandler = () => {
    const validFirstName = validateFirstName(state.firstName);
    const validFirstNameCharLength = validateFirstNameCharLength(
      state.firstName
    );

    const validLastName = validateLastName(state.lastName);
    const validLastNameCharLength = validateFirstNameCharLength(state.lastName);

    const valEmail = validEmail(state.email);

    const validPhoneNumberChars = validatePhoneNumber(state.phoneNumber);
    const validPhoneNumberLength = validatePhoneNumberLength(state.phoneNumber);

    const validSpecialRequest = validateSpecialRequests(state.specialRequests);
  };

  //Firstname
  const changeFirstNameHandler = (e) => {
    setState((ps) => ({
      ...ps,
      firstName: e.target.value,
      firstNameError: "",
    }));
  };

  const firstNameBlurHandler = () => {
    const validFirstName = validateFirstName(state.firstName);
    const validFirstNameCharLength = validateFirstNameCharLength(
      state.firstName
    );

    console.log("FIRRED");

    setState((ps) => ({
      ...ps,
      firstNameError: !validFirstName
        ? "First name cannot be empty"
        : !validFirstNameCharLength
        ? "First name should exceed 50 characters"
        : "",
    }));
  };

  const firstNameErrorHandler = (err) => {
    setState((ps) => ({
      ...ps,
      firstNameError: err,
    }));
  };

  // Firstname

  // Last name
  const changeLastNameHandler = (e) => {
    setState((ps) => ({
      ...ps,
      lastName: e.target.value,
      lastNameError: "",
    }));
  };

  const lastNameBlurHandler = () => {
    const validLastName = validateLastName(state.lastName);
    const validLastNameCharLength = validateFirstNameCharLength(state.lastName);

    setState((ps) => ({
      ...ps,
      lastNameError: !validLastName
        ? "Last name cannot be empty"
        : !validLastNameCharLength
        ? "Last name should exceed 50 characters"
        : "",
    }));
  };

  const lastNameErrorHandler = (err) => {
    setState((ps) => ({
      ...ps,
      lastNameError: err,
    }));
  };

  // Last name

  // email
  const changeEmailHandler = (e) => {
    setState((ps) => ({
      ...ps,
      email: e.target.value,
      emailError: "",
    }));
  };

  const emailBlurHandler = () => {
    const valEmail = validEmail(state.email);
    setState((ps) => ({
      ...ps,
      emailError: !valEmail ? "Provide a valid email" : "",
    }));
  };

  const emailErrorHandler = (err) => {
    setState((ps) => ({
      ...ps,
      emailError: err,
    }));
  };

  // email

  // phone
  const changePhoneNumberHandler = (e) => {
    setState((ps) => ({
      ...ps,
      phoneNumber: e.target.value,
      phoneNumberError: "",
    }));
  };

  const phoneNumberBlurHandler = () => {
    const validPhoneNumberChars = validatePhoneNumber(state.phoneNumber);
    const validPhoneNumberLength = validatePhoneNumberLength(state.phoneNumber);

    setState((ps) => ({
      ...ps,
      phoneNumberError: !validPhoneNumberChars
        ? "Provide a valid phone number"
        : !validPhoneNumberLength
        ? "Phone number cannot exceed 15 characters"
        : "",
    }));
  };

  const phoneNumberErrorHandler = (err) => {
    setState((ps) => ({
      ...ps,
      phoneNumberError: err,
    }));
  };

  // phone

  // specialRequest

  const changeSpecialRequestsHandler = (e) => {
    setState((ps) => ({
      ...ps,
      specialRequests: e.target.value,
      specialRequestsError: "",
    }));
  };

  const specialRequestsBlurHandler = () => {
    const validSpecialRequest = validateSpecialRequests(state.specialRequests);
    setState((ps) => ({
      ...ps,
      specialRequestsError: !validSpecialRequest
        ? "Special requests cannot exceed 100 characters"
        : "",
    }));
  };

  const specialRequestsErrorHandler = (err) => {
    setState((ps) => ({
      ...ps,
      specialRequestsError: err,
    }));
  };

  // specialRequest

  return (
    <Routes>
      <Route path="/" element={<Booking step={step} />}>
        <Route
          index
          element={
            <BookingForm
              slots={slots}
              changeStepHandler={changeStepHandler}
              changeDateHandler={changeDateHandler}
              changeTimeHandler={changeTimeHandler}
              changeOccationHandler={changeOccationHandler}
              occationBlurHandler={occationBlurHandler}
              changeDinersHandler={changeDinersHandler}
              changeDinersBlurHandler={changeDinersBlurHandler}
              changeSeatingHandler={changeSeatingHandler}
              changeDateErrorHandler={changeDateErrorHandler}
              changeTimeErrorHandler={changeTimeErrorHandler}
              changeOccationErrorHandler={changeOccationErrorHandler}
              changeDinersErrorHandler={changeDinersErrorHandler}
              changeSeatingErrorHandler={changeSeatingErrorHandler}
              seatingBlurHandler={seatingBlurHandler}
              dateBlurHandler={dateBlurHandler}
              timeBlurHandler={timeBlurHandler}
              handleSubmit={handleSubmit}
              date={state.date}
              time={state.time}
              occation={state.occation}
              diners={state.diners}
              seating={state.seating}
              dateError={state.dateError}
              timeError={state.timeError}
              occationError={state.occationError}
              dinersError={state.dinersError}
              seatingError={state.seatingError}
            />
          }
        />
        <Route
          path="confirm"
          element={
            <ConfirmedBooking
              firstStepValidated={state.firstStepValidated}
              changeStepHandler={changeStepHandler}
              changeFirstNameHandler={changeFirstNameHandler}
              changeLastNameHandler={changeLastNameHandler}
              changeEmailHandler={changeEmailHandler}
              changePhoneNumberHandler={changePhoneNumberHandler}
              changeSpecialRequestsHandler={changeSpecialRequestsHandler}
              firstNameBlurHandler={firstNameBlurHandler}
              lastNameBlurHandler={lastNameBlurHandler}
              emailBlurHandler={emailBlurHandler}
              phoneNumberBlurHandler={phoneNumberBlurHandler}
              specialRequestsBlurHandler={specialRequestsBlurHandler}
              firstName={state.firstName}
              lastName={state.lastName}
              email={state.email}
              phoneNumber={state.phoneNumber}
              specialRequests={state.specialRequests}
              firstNameError={state.firstNameError}
              lastNameError={state.lastNameError}
              emailError={state.emailError}
              phoneNumberError={state.phoneNumberError}
              specialRequestsError={state.specialRequestsError}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default Reservation;
