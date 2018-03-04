(function(){
      emailjs.init("user_XjfsN62KV6euHpJwvZ5ca");
})();

//Rest All the fields
function resetAll(arr){
  // for(var i=0; i<arr.length; i++){
  //   document.getElementById(arr[i]).value="";
  //
  // }
  arr.forEach(function(el) {
    document.getElementById(el).value = "";
  })
}



function sendEmail() {
  emailjs.send("gmail","portfolio_inquiries",{
    subject: document.getElementById('email-subject').value,
    email: document.getElementById('email-address').value,
    message: document.getElementById('email-message').value
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
