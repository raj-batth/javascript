// ! Note hoisting arrow function need to be declared before using it

class App {
  constructor() {
    this.ui = new UI();
    this.validation = new Validation();
  }
  registerUserSubmitted = (e) => {
    alert('You Have Registered Successfully !')
    window.reload();
    e.preventDefault();
  };
  userNameKeyup = (e) => {
    this.validInvalidToggleService(this.validation.isValidUserName(e.target),'Please Enter Valid UserName', e, 'feedback-user_name');
    e.preventDefault();
  };
  emailKeyup = (e) => {
    this.validInvalidToggleService(this.validation.isValidEmail(e.target),'Please Enter Valid Email', e, 'feedback-email');
    e.preventDefault();
  };
  passwordKeyup = (e) => {
    this.validInvalidToggleService(this.validation.isValidPassword(e.target),'Password Must Be 6 Or More Chars', e, 'feedback-password');
    e.preventDefault();
  };
  confirmPasswordKeyup = (e) => {
    this.validInvalidToggleService(this.validation.isValidConfirmPassword(this.ui.password, e.target),'Password Does Not Match', e, 'feedback-confirm_password')
    e.preventDefault();
  };
  validInvalidToggleService = (validation, errMessage, e, feedBackClass) =>{
    if (validation) {
      this.ui.addIsValidClass(e.target);
      this.ui.addFeedback('',feedBackClass , 'valid-feedback');
    } else {
      this.ui.addIsInValidClass(e.target);
      this.ui.addFeedback(errMessage, feedBackClass, 'invalid-feedback');
    }
    this.ui.disabledToggle();
  }
  init = () => {
    this.ui.submitForm.addEventListener('submit', this.registerUserSubmitted);
    this.ui.userName.addEventListener('keyup', this.userNameKeyup);
    this.ui.email.addEventListener('keyup', this.emailKeyup);
    this.ui.password.addEventListener('keyup', this.passwordKeyup);
    this.ui.confirmPassword.addEventListener(
      'keyup',
      this.confirmPasswordKeyup
    );
  };
}

const app = new App();

app.init();
