// form submit

        function submitForm(event) {
            event.preventDefault();
    
          
            fetch("https://getform.io/f/f465d4da-98d8-4702-b3a3-0f25b6cb52d6", {
                method: "POST",
                body: new FormData(event.target),
            })
            .then(response => {
             
                if (response.ok) {
                   
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("mess").value = "";
                    
                  
                    alert("Form submitted successfully!");
                }
            })
            .catch(error => {
                console.error("Error submitting form:", error);
             
            });
        }