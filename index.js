document.addEventListener("DOMContentLoaded", function () {
  let switcher = document.querySelector(".switcher");
  let slider = document.querySelector(".slider");
  let loginBtn = document.querySelector(".login-btn");
  let signupBtn = document.querySelector(".signup-btn");
  let formSection = document.querySelector(".form-section");
  let loginBox = document.querySelector(".login-box");
  let signupBox = document.querySelector(".signup-box");

  function toggleForm(type) {
    if (type === "signup") {
      switcher.classList.add("signup-active");
      loginBox.classList.remove("active");
      signupBox.classList.add("active");
      slider.style.transform = "translateX(100%)";
    } else {
      switcher.classList.remove("signup-active");
      signupBox.classList.remove("active");
      loginBox.classList.add("active");
      slider.style.transform = "translateX(0)";
    }
  }

  loginBtn.addEventListener("click", () => toggleForm("login"));
  signupBtn.addEventListener("click", () => toggleForm("signup"));
});
