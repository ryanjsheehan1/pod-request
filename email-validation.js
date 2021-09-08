const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.querySelector(".error");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  const test = email.value.length === 0 || regex.test(email.value);

  if (!test) {
    e.preventDefault();
    errorElement.innerText = "Oops! Please check your email";
  } else {
    e.preventDefault();
    // errorElement.innerText = "valid";
  }
});
