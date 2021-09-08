function ValidateEmail(inputText) {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    return true;
  } else {
    alert("Oops! Please check your email");
    document.getElementsByClassName("email-warning").innerHTML = "TEST";
    return false;
  }
}
