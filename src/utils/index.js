export const validateOccation = (occation) => {
  return occation !== "Select occation";
};

export const validateDiner = (diners) => {
  return diners !== "Select diners";
};

export const validateDate = (date) => {
  return date !== null && date !== undefined;
};

export const validateTime = (time) => {
  return time !== null && time !== undefined;
};

export const validateSeating = (seating) => {
  return !!seating;
};

export const validateFirstName = (firstName) => {
  return !!firstName;
};

export const validateFirstNameCharLength = (firstName) => {
  return firstName.length < 51;
};

export const validateLastName = (lastName) => {
  return lastName;
};

export const validateLastNameCharLength = (lastName) => {
  return lastName.length < 51;
};

export const validEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone) => {
  const numbersRegex = /^[0-9]+$/;
  return numbersRegex.test(phone);
};

export const validatePhoneNumberLength = (phone) => {
  return phone.length < 15;
};

export const validateSpecialRequests = (specialRequests) => {
  return specialRequests.length < 101;
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
