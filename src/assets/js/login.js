const passwordInputL = document.querySelectorAll(".passwordL")

let eyes = document.querySelectorAll(".eyeL");

for(let i = 0;i<eyes.length;i++){
    eyes[i].addEventListener("click", function(e){
      const type = passwordInputL[i].getAttribute("type") === "password" ? "text" : "password";
      passwordInputL[i].setAttribute("type", type)
    });
};
