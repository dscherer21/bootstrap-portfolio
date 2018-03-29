var bodyParser = require('body-parser');
var express = require('express');
var morgan = require('morgan');
var app = express();
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

$(document).on("click", "#submit", function() {
    // AJAX POST call to the submit route on the server
    // This will take the data from the form and send it to the server
    /*$.ajax({
        type: "POST",
        dataType: "json",
        url: "contact.html",
        data: {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val(),
            created: Date.now()
        }
    })

    .done(function(data) {
        //send email
        var to = 'dscherer21@gmail.com';
        var from = email;
        var subject = 'Portfolio Contact Form Submission';
        var body = 'Name: ' + name + '\n Email: ' + email + '\n Message: ' + message + '\n';
        if(mail(to, from, subject, body)) {
            alert('Thank you, ' + name + '! Your message has been sent.');
        } else {
            alert('Whoops! There was error with your submission. Please try again.');
        };
        // Clear the form fields after submit
        $("#name").val("");
        $("#email").val("");
        $('#message').val('');
    });*/

    var name = $('#name').val();
    var email = $('#email').val();
    var message = $('#message').val();
    $.ajax({ 
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': "xxxxxxxx",
            'message': {
            'from_email': "'" + email + "'",
            'to': [
            {
            'email': "dscherer21@gmail.com",
            'name': 'xxxxxx',
            'type': 'to'
            }
            ],
            'autotext': 'true',
            'subject': 'Portfolio Page Contact Form Submission',
            'html': 'Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message + '\n' // and use it!
            }
        }
    }).done(function(response) {
        console.log(response);
        alert('Thank you, ' + name + '! Your message has been sent.');
    });

});




