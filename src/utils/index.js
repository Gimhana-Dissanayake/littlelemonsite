export const validateDate = (date) => {
  return date !== null && date !== undefined;
};

export const dateErrorMessage = (date) => {
  return validateDate(date) ? "" : "Please select a valid date";
};

export const validateTime = (time) => {
  return time !== null && time !== undefined;
};

export const timeErrorMessage = (time) => {
  return validateTime(time) ? "" : "Please select a valid time";
};

export const validateOccation = (occation) => {
  return occation !== "Select occation";
};

export const occationErrorMessage = (occation) => {
  return validateOccation(occation) ? "" : "Please select an occation";
};

export const validateDiner = (diners) => {
  return diners !== "Select diners";
};

export const dinerErrorMessage = (diners) => {
  return validateDiner(diners) ? "" : "Please select number of diners";
};

export const validateSeating = (seating) => {
  return !!seating;
};

export const seatingErrorMessage = (seating) => {
  return validateSeating(seating) ? "" : "Please select number of diners";
};

export const validateFirstName = (firstName) => {
  return !!firstName;
};

export const validateFirstNameCharLength = (firstName) => {
  return firstName.length < 51;
};

export const firstNameErrorMessage = (firstName) => {
  const validFirstName = validateFirstName(firstName);
  const validFirstNameCharLength = validateFirstNameCharLength(firstName);

  return !validFirstName
    ? "First name cannot be empty"
    : !validFirstNameCharLength
    ? "First name should exceed 50 characters"
    : "";
};

export const validateLastName = (lastName) => {
  return lastName;
};

export const validateLastNameCharLength = (lastName) => {
  return lastName.length < 51;
};

export const lastNameErrorMessage = (lastName) => {
  const validLastName = validateLastName(lastName);
  const validLastNameCharLength = validateFirstNameCharLength(lastName);
  return !validLastName
    ? "Last name cannot be empty"
    : !validLastNameCharLength
    ? "Last name should exceed 50 characters"
    : "";
};

export const validEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const emailErrorMessage = (email) => {
  const valEmail = validEmail(email);
  return !valEmail ? "Provide a valid email" : "";
};

export const validatePhoneNumber = (phone) => {
  const numbersRegex = /^[0-9]+$/;
  return numbersRegex.test(phone);
};

export const validatePhoneNumberLength = (phone) => {
  return phone.length < 15;
};

export const phoneNumberErrorMessage = (phone) => {
  const validPhoneNumberChars = validatePhoneNumber(phone);
  const validPhoneNumberLength = validatePhoneNumberLength(phone);

  return !validPhoneNumberChars
    ? "Provide a valid phone number"
    : !validPhoneNumberLength
    ? "Phone number cannot exceed 15 characters"
    : "";
};

export const validateSpecialRequests = (specialRequests) => {
  return specialRequests.length < 101;
};

export const specialRequestsErrorMessage = (specialRequests) => {
  const validSpecialRequest = validateSpecialRequests(specialRequests);
  return !validSpecialRequest
    ? "Special requests cannot exceed 100 characters"
    : "";
};

export const isSlotTaken = (selectedDate, selectedTime, slots) => {
  let isTaken = false;

  slots.forEach((item) => {
    if (
      item.date.getDate() === selectedDate.getDate() &&
      item.date.getMonth() === selectedDate.getMonth() &&
      item.date.getYear() === selectedDate.getYear() &&
      item.time === selectedTime.getHours() &&
      !isTaken
    ) {
      isTaken = true;
    }
  });

  return isTaken;
};

export const slotTakenErrorMsg = (selectedDate, selectedTime, slots) => {
  return isSlotTaken(selectedDate, selectedTime, slots)
    ? "The selected time slot for the given date is taken!"
    : "";
};
