const password = document.getElementById("password");
const openEye = document.querySelector(".open-eye");
const closeEye = document.querySelector(".closed-eye");

openEye.addEventListener("click", () => {
  openEye.classList.remove("show");
  closeEye.classList.remove("show");

  password.type = "password";
});

closeEye.addEventListener("click", () => {
  openEye.classList.add("show");
  closeEye.classList.add("show");

  password.type = "text";
});
