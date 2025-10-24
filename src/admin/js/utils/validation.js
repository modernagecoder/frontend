/**
 * VALIDATION UTILITIES
 */

function validateEmail(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[0-9]{10}$/;
  return re.test(phone.replace(/\s/g, ''));
}

function validateRequired(value) {
  return value && value.trim().length > 0;
}
