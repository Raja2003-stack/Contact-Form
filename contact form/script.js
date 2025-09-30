document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  let isValid = true;

 
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const nameError = document.querySelector("#name + .error");
  const emailError = document.querySelector("#email + .error");
  const messageError = document.querySelector("#message + .error");
  const successMsg = document.getElementById("success");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";


  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

 
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

 
  if (message === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  
  if (isValid) {
    successMsg.textContent = "✅ Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
