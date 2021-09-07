export const required = (value) => {
  if (value) {
    return undefined;
  } else {
    return "field is required";
  }
};

export const maxLengthCreator =(maxLength)  => (value) => {
  if (value && value.length > maxLength) {
    return `Max length is ${maxLength} symbols`;
  } else {
    return undefined;
  }
};

export const minLengthCreator =(minLength)  => (value) => {
  if (value && value.length < minLength) {
    return `At least ${minLength} symbols`;
  } else {
    return undefined;
  }
};
