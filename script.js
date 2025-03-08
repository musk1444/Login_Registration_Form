document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const slider = document.querySelector(".slider");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  loginBtn.addEventListener("click", function () {
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
    slider.style.transform = "translateX(0%)";
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  });

  signupBtn.addEventListener("click", function () {
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
    slider.style.transform = "translateX(100%)";
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  });
});
