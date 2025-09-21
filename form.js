document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const switchBtns = document.querySelectorAll('.switch-form, .switch-form-btn');
  const loginForm = document.querySelector('.login-form');
  const signupForm = document.querySelector('.signup-form');
  const welcomeTitle = document.querySelector('.welcome-title');
  const welcomeText = document.querySelector('.welcome-text');
  const welcomeBtn = document.querySelector('.switch-form-btn');

  switchBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if(container.classList.contains('active-login')) {
        container.classList.remove('active-login');
        container.classList.add('active-signup');

        loginForm.classList.remove('active-form');
        signupForm.classList.add('active-form');

        welcomeTitle.textContent = "Join Us!";
        welcomeText.textContent = "Sign up to get started with our services.";
        welcomeBtn.textContent = "Login";
      } else {
        container.classList.remove('active-signup');
        container.classList.add('active-login');

        signupForm.classList.remove('active-form');
        loginForm.classList.add('active-form');

        welcomeTitle.textContent = "Welcome Back!";
        welcomeText.textContent = "To keep connected with us please login with your personal info";
        welcomeBtn.textContent = "Sign Up";
      }
    });
  });
});
