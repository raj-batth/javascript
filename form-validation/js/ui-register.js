class UI {
  constructor() {
    this.userName = document.querySelector('#user_name');
    this.email = document.querySelector('#email');
    this.password = document.querySelector('#password');
    this.confirmPassword = document.querySelector('#confirm_password');
    this.submitForm = document.querySelector('#register');
    this.submitButton = document.querySelector('#submit');
    this.invalidClass = document.getElementsByClassName('invalid-feedback');
  }

  addIsValidClass = (field) => {
    field.classList.add('is-valid');
    field.classList.remove('is-invalid');
  }

  addIsInValidClass = (field) => {
    field.classList.remove('is-valid');
    field.classList.add('is-invalid');
  }

  addFeedback = (message, className, errClass) => {
    document.querySelector(`.${className}`).textContent = message;
    if (errClass === 'invalid-feedback') {
      document.querySelector(`.${className}`).classList.add(errClass);
      document.querySelector(`.${className}`).classList.remove('valid-feedback');
    } else {
      document.querySelector(`.${className}`).classList.add(errClass);
      document.querySelector(`.${className}`).classList.remove('invalid-feedback');
    }
  }

  disabledToggle = () => {
    this.invalidClass.length === 0
      ? (this.submitButton.disabled = false)
      : (this.submitButton.disabled = true);
  };
}
