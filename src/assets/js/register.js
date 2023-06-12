  const passwordInput = document.getElementById('passwordInput');
  const togglePassword = document.getElementById('togglePassword');

  const repeatPasswordInput = document.getElementById('repeatPasswordInput');
  const toggleRepeatPassword = document.getElementById('toggleRepeatPassword');

  togglePassword.addEventListener('click', function(e) {
    e.preventDefault();
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.classList.remove('fa-eye');
      togglePassword.classList.add('fa-eye-slash');
    } else {
      passwordInput.type = 'password';
      togglePassword.classList.remove('fa-eye-slash');
      togglePassword.classList.add('fa-eye');
    }
  });

  toggleRepeatPassword.addEventListener('click', function(e) {
    e.preventDefault();
    if (repeatPasswordInput.type === 'password') {
      repeatPasswordInput.type = 'text';
      toggleRepeatPassword.classList.remove('fa-eye');
      toggleRepeatPassword.classList.add('fa-eye-slash');
    } else {
      repeatPasswordInput.type = 'password';
      toggleRepeatPassword.classList.remove('fa-eye-slash');
      toggleRepeatPassword.classList.add('fa-eye');
    }
  });

