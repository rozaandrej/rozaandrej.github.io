document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Fetch form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Perform form validation
    if (name === "" || email === "" || message === "") {
      displayStatusMessage("Error: Please fill in all fields.", "error");
    } else {
      // Simulate form submission success
      // Ovde možete dodati stvarnu logiku slanja poruke na server
  
      // Prikaz uspešne povratne poruke
      displayStatusMessage("Uspešno ste odradili posao.", "success");
  
      // Reset form fields
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  });
  
  function displayStatusMessage(message, type) {
    var statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = message;
  
    if (type === "error") {
      statusMessage.style.color = "red";
    } else if (type === "success") {
      statusMessage.style.color = "green";
    }
  
    setTimeout(function() {
      statusMessage.textContent = "";
    }, 3000); // Clear status message after 3 seconds
  }
  
  