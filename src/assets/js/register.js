

  let eyesR = document.querySelectorAll(".eyeR");
  let passwordInputR = 0;

  for(let i = 0;i<eyesR.length;i++){
    let passwordInputR = document.querySelectorAll(".passwordR")
    eyesR[i].addEventListener("click", function(e){
        const type = passwordInputR[i].getAttribute("type") === "password" ? "text" : "password";
        passwordInputR[i].setAttribute("type", type)
      });
  };
