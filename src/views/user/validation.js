const validateTextField = (name) => {
  if (!name.length) {
    return { valid: false, error: 'The field is required' };
  }
  return { valid: true, error: null };
};

const validateEmail = (email) => {
  if (!email.length) {
    return { valid: false, error: 'The field is required' };
  }
  const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(emailReg)) {
    return { valid: false, error: 'Please enter a valid email address' };
  }
  return { valid: true, error: null };
};

const validateDob = (field, max) => {
  if (!field.length) {
    return { valid: false, error: 'The field is required' };
  }
  const date = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
  if (!field.match(date)) {
    return { valid: false, error: 'Please, enter a valid date format' };
  }
  const yearDiff = max.split('-')[0] - field.split('-')[0];
  const monthDiff = max.split('-')[1] - field.split('-')[1];
  const dayDiff = max.split('-')[2] - field.split('-')[2];
  const yearAgeDiff = yearDiff + monthDiff;
  const monthAgeDiff = yearAgeDiff + dayDiff;
  console.log(yearDiff, monthDiff, dayDiff, yearAgeDiff, monthAgeDiff);
  if (yearDiff === 15) {
    if (yearAgeDiff < 15) {
      return { valid: false, error: 'You must be at least 15years!' };
    }
    if (monthAgeDiff < 15) {
      return { valid: false, error: 'You must be at least 15years!' };
    }
  } else if (yearDiff <= 15) {
    return { valid: false, error: 'You must be at least 15years!' };
  }
  return { valid: true, error: null };
};

const validateCgpa = (num) => {
  if (!num.length) {
    return { valid: false, error: 'The field is required' };
  }
  const cgpa = /^\d{1}[.]\d{2}$/;
  if (!num.match(cgpa)) {
    return { valid: false, error: 'Please, enter a valid CGPA format' };
  }
  return { valid: true, error: null };
};
const validateTextFieldApplication = (text) => {
  if (text.length < 15) {
    return { valid: false, error: 'This field requires a minimum of 15 characters' };
  }
  return { valid: true, error: null };
};
const validateBatchIdApplication = (number) => {
  if (number < 1) {
    return { valid: false, error: 'Batch ID is required and cannot be less than 1' };
  }
  return { valid: true, error: null };
};

export {
  validateTextField,
  validateEmail,
  validateDob,
  validateCgpa,
  validateTextFieldApplication,
  validateBatchIdApplication,
};
