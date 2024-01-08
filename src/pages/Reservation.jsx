import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Booking from "../layouts/Booking";

import {
  dateErrorMessage,
  dinerErrorMessage,
  emailErrorMessage,
  firstNameErrorMessage,
  isSlotTaken,
  lastNameErrorMessage,
  occationErrorMessage,
  phoneNumberErrorMessage,
  seatingErrorMessage,
  slotTakenErrorMsg,
  specialRequestsErrorMessage,
  timeErrorMessage,
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
import useSubmit from "../hooks/useSubmit";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

const Reservation = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState("Basic Details");
  const changeStepHandler = (step) => {
    setStep(step);
  };

  const { isLoading, response, submit } = useSubmit();

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
    const msg = dateErrorMessage(state.date);
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
    const msg = timeErrorMessage(state.time);
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
    const msg = occationErrorMessage(state.occation);
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
    const msg = dinerErrorMessage(state.diners);
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
    const msg = seatingErrorMessage(state.seating);
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
      changeDateErrorHandler(dateErrorMessage(state.date));
    }

    if (!validTime) {
      changeTimeErrorHandler(timeErrorMessage(state.date));
    }

    if (isTimeTaken) {
      changeTimeErrorHandler(slotTakenErrorMsg(state.date, state.time, slots));
    }

    if (!validOccation) {
      changeOccationErrorHandler(occationErrorMessage(state.occation));
    }

    if (!validDiners) {
      changeDinersErrorHandler(dinerErrorMessage(state.diners));
    }

    if (!validSeating) {
      changeSeatingErrorHandler(seatingErrorMessage(state.seating));
    }

    if (validity) {
      changefirstStepValidatedHandler(true);
      navigate("confirm");
      changeStepHandler("Confirmation");
    }
  };

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

    const validity =
      validFirstName &&
      validFirstNameCharLength &&
      validLastName &&
      validLastNameCharLength &&
      valEmail &&
      validPhoneNumberChars &&
      validPhoneNumberLength &&
      validSpecialRequest;

    const firstNameErrorMsg = firstNameErrorMessage(state.firstName);

    if (firstNameErrorMsg) {
      firstNameErrorHandler(firstNameErrorMsg);
    }

    const lastNameErrorMsg = lastNameErrorMessage(state.lastName);

    if (lastNameErrorMsg) {
      lastNameErrorHandler(lastNameErrorMsg);
    }

    const emailErrorMsg = emailErrorMessage(state.email);

    if (emailErrorMsg) {
      emailErrorHandler(emailErrorMsg);
    }

    const phoneNumberErrorMsg = phoneNumberErrorMessage(state.phoneNumber);

    if (phoneNumberErrorMsg) {
      phoneNumberErrorHandler(phoneNumberErrorMsg);
    }

    const specialRequestMsg = specialRequestsErrorMessage(
      state.specialRequests
    );

    if (specialRequestMsg) {
      specialRequestsErrorHandler(specialRequestMsg);
    }

    if (validity) {
      const payload = {
        date: state.date,
        time: state.time,
        occation: state.occation,
        diners: state.diners,
        seating: state.seating,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phoneNumber: state.phoneNumber,
        specialRequest: state.specialRequests,
      };

      submit("submitUrl", payload);
    }
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
    setState((ps) => ({
      ...ps,
      firstNameError: firstNameErrorMessage(state.firstName),
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
    setState((ps) => ({
      ...ps,
      lastNameError: lastNameErrorMessage(state.lastName),
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
    setState((ps) => ({
      ...ps,
      emailError: emailErrorMessage(state.email),
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
    setState((ps) => ({
      ...ps,
      phoneNumberError: phoneNumberErrorMessage(state.phoneNumber),
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
    setState((ps) => ({
      ...ps,
      specialRequestsError: specialRequestsErrorMessage(state.specialRequests),
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
      <Route path="/" element={<Booking step={step} response={response} />}>
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
              submitHandler={confirmationSubmitHandler}
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
              isLoading={isLoading}
              response={response}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default Reservation;
