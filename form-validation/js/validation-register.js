class Validation {
  constructor() {}

  isValidUserName = (userName) => {
    return userName.value !== '' && userName.value.length > 4;
  };

  isValidEmail = (email) => {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    return re.test(email.value);
  };
  isValidPassword = (password) => {
    return password.value !== '' && password.value.length >= 6;
  };
  isValidConfirmPassword = (password, confirmPassword) => {
    return password.value === confirmPassword.value;
  };
}
