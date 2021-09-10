const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.querySelector(".error");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
  const test = regex.test(email.value);

  if (!test && email.value !== "") {
    e.preventDefault();
    errorElement.style.color = "#fb3e3e";
    errorElement.innerText = "Oops! Please check your email";
    form.style.paddingBottom = "3.6rem";
  } else if (email.value === "") {
    e.preventDefault();
    errorElement.innerText = "";
    form.style.paddingBottom = "6.4rem";
  } else {
    e.preventDefault();
    errorElement.style.color = "#54e6af";
    errorElement.innerText =
      "Thanks! Your request for access has been submitted";
    form.style.paddingBottom = "3.6rem";
  }
});
