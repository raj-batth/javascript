// ! Note hoisting arrow function need to be declared before using it
class App {
  constructor() {
    this.ui = new UI();
    this.validation = new Validation();
  }
  registerUserSubmitted = (e) => {
    // this.userNameKeyup();
    // this.emailKeyup();
    // this.passwordKeyup();
    // this.confirmPasswordKeyup();
    alert('You Have Registered Successfully !')
    window.reload();
    e.preventDefault();
  };

  userNameKeyup = () => {
    this.validInvalidToggleService(this.validation.isValidUserName(this.ui.userName),'Please Enter Valid UserName', this.ui.userName, 'feedback-user_name');
  };


  emailKeyup = () => {
    this.validInvalidToggleService(this.validation.isValidEmail(this.ui.email),'Please Enter Valid Email', this.ui.email, 'feedback-email');
  };

  passwordKeyup = () => {
    this.validInvalidToggleService(this.validation.isValidPassword(this.ui.password),'Password Must Be 6 Or More Chars', this.ui.password, 'feedback-password');
    // ? To check confirm password, while changing password 
    this.validInvalidToggleService(this.validation.isValidConfirmPassword(this.ui.password,this.ui.confirmPassword),'Password Does Not Match', this.ui.confirmPassword, 'feedback-confirm_password')
  };

  confirmPasswordKeyup = () => {
    this.validInvalidToggleService(this.validation.isValidConfirmPassword(this.ui.password,this.ui.confirmPassword),'Password Does Not Match', this.ui.confirmPassword, 'feedback-confirm_password')
  };

  validInvalidToggleService = (validation, errMessage, targetField ,feedBackClass) => {
    if (validation) {
      // console.log(e);
      this.ui.addIsValidClass(targetField);
      this.ui.addFeedback('',feedBackClass , 'valid-feedback');
    } else {
      this.ui.addIsInValidClass(targetField);
      this.ui.addFeedback(errMessage, feedBackClass, 'invalid-feedback');
    }
    this.ui.disabledToggle();
  }
  init = () => {
    this.ui.submitForm.addEventListener('submit', this.registerUserSubmitted);
    this.ui.userName.addEventListener('keyup', this.userNameKeyup);
    this.ui.email.addEventListener('keyup', this.emailKeyup);
    this.ui.password.addEventListener('keyup', this.passwordKeyup);
    this.ui.confirmPassword.addEventListener('keyup', this.confirmPasswordKeyup);
  };
}
 
const app = new App();
app.init();
