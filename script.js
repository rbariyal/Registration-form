// const form = document.querySelector('form')

// function fileValidation() {
//     var fileInput =
//         document.getElementById('file');

//     var filePath = fileInput.value;
// console.log(fileInput);
//     // Allowing file type
//     var allowedExtensions = /(\.pdf|\.doc|\.exe|\.zip|\.xls)$/i;

//     if (!allowedExtensions.exec(filePath)) {
//         alert('Invalid file type');
//         fileInput.value = '';
//         return false;
//     }
// }

// function imageValidation() {
//     var fileInput =
//         document.getElementById('image');

//     var filePath = fileInput.value;
// console.log(fileInput);
//     // Allowing file type
//     var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

//     if (!allowedExtensions.exec(filePath)) {
//         alert('Invalid file type');
//         fileInput.value = '';
//         return false;
//     }
// }
//     function seterror(id, error) {
//         element = document.getElementById(id);
//         element.getElementsByClassName("formerror")[0].innerHTML = error;
//     }
//     console.log("hello")

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         var returnval = true;
//         var name = document.forms['myform']["myname"].value;
//         if (name.length < 5) {
//             seterror("name", "*Length of name is too short");
//             returnval = false;
//         }
//         var phoneno = /^\d{10}$/;
//         var phone = document.forms['myform']["number"].value
//         if (phone.match(phoneno)) {
//             returnval = true;
//         }
//         else {
//             seterror("number", "*Mobile number must be 10 digits long");
//             returnval = false;
//         }
//         var emailval = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//         var mail = document.forms['myform']["email"].value
//         if (mail.match(emailval)) {
//             returnval = true;
//         }
//         else {
//             seterror("email", "*Enter valid email address");
//             returnval = false;
//         }
//         var data = {
//             name: name,
//             mobilenumber: phone,
//             emailaddress: mail
//         }
//         var item = JSON.stringify(data);
//         localStorage.setItem("data", item);
//         console.log(item);

//         return returnval;
//     })

$().ready(function () {
 
    $("#signupForm").validate({
       
        
        rules: {
            firstname: "required",
            lastname: "required",
           
            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                minlength: 6,
               
                // For checking both passwords are same or not
                equalTo: "#password"
            },
            email: {
                required: true,
                email: true
            },
            image: { required: true, extension: "png|jpe?g|gif", filesize: 1048576  },
            file: { required: true, extension: "doc|pdf|zip|exe", filesize: 1048576  }
    
        },
        // In 'messages' user have to specify message as per rules
        messages: {
            firstname: " Please enter your firstname",
            lastname: " Please enter your lastname",
           
            password: {
                required: " Please enter a password",
                minlength:
              " Your password must be consist of at least 6 characters"
            },
            confirm_password: {
                required: " Please enter a password",
                minlength:
              " Your password must be consist of at least 5 characters",
                equalTo: " Please enter the same password as above"
            },
             image: "Image must be JPG, GIF or PNG, less than 1MB" ,
             file:"File must be PDF, DOC or ZIP, less than 1MB"
        }
    });
});