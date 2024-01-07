// form submit

        function submitForm(event) {
            // Prevent the form from submitting in the traditional way
            event.preventDefault();
    
            // Your form submission logic here
            // For example, using fetch to submit the form data to the server
            fetch("https://getform.io/f/f465d4da-98d8-4702-b3a3-0f25b6cb52d6", {
                method: "POST",
                body: new FormData(event.target),
            })
            .then(response => {
                // Handle the response, check for success
                if (response.ok) {
                    // Reset the form fields
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("mess").value = "";
                    
                    // Show an alert message
                    alert("Form submitted successfully!");
                }
            })
            .catch(error => {
                console.error("Error submitting form:", error);
                // Handle errors if needed
            });
        }