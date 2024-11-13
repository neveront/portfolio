function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  };

  emailjs.send("service_fnft5il", "template_413p9h8", parms).then(alert("Email Sent!!"));
}