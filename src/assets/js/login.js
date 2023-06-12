let btn = document.getElementById("changeType");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = document.getElementById("inputPassword");
  let toggleIcon = document.getElementById("icon");
  if (input.type === 'password') {
    input.type = 'text';
    toggleIcon.classList.remove('fa-eye');
    toggleIcon.classList.add('fa-eye-slash');
  } else {
    input.type = 'password';
    toggleIcon.classList.remove('fa-eye-slash');
    toggleIcon.classList.add('fa-eye');
  };

});











