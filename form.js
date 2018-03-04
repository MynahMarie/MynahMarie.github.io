(function(){
      emailjs.init("user_XjfsN62KV6euHpJwvZ5ca");
})();

//Rest All the fields
function resetAll(arr){
  arr.forEach(function(el) {
    document.getElementById(el).value = "";
  })
}

function sendEmail() {
  //Still need to add the regex checks!!
  var subject = document.getElementById('email-subject').value;
  var email = document.getElementById('email-address').value;
  var message = document.getElementById('email-message').value;

  emailjs.send("gmail","portfolio_inquiries",{
    subject: subject,
    email: email,
    message: message
  })
  .then(
      function(response) {
        console.log("SUCCESS", response);
        resetAll(['email-subject', 'email-address', 'email-message']);

        alert("Thank you! You should receive an email soon confirming that I have received your message.");
      },
      function(error) {
        console.log("FAILED", error);
      }
    );
  }
