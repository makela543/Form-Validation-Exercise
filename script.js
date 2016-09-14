$(document).ready(function() {
    
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    
    
    $("#submitButton").click(function() {
        
        var errorMessage = "";
        var fieldsMissing = "";
        
        if ($("#email").val() == "") {
            fieldsMissing += "<br>Email";
        }
        
        if ($("#phone").val() == "") {
            fieldsMissing += "<br>Phone";
        }
        
        if ($("#password").val() == "") {
            fieldsMissing += "<br>Password";
        }
        
        if ($("#passwordConfirm").val() == "") {
            fieldsMissing += "<br>Confirm Password";
        }
        
        if (fieldsMissing != "") {
            errorMessage += "The following fields are missing:" + fieldsMissing;
        }
        
        if (isEmail($("#email").val()) == false) {
            errorMessage += "<p>Your email address is not valid.</p>";
        }
        
        if ($.isNumeric($("#phone").val()) == false) {
            errorMessage += "<p>Your phone number is not numeric.</p>"; 
        }
        
        if ($("#password").val() != $("#passwordConfirm").val()) {
            errorMessage += "<p>The passwords don't match.</p>";
        }
        
        if (errorMessage != "") {
            $("#errorMessage").css("display", "block");
            $("#success").css("display", "none");
            $("#errorMessage").html(errorMessage);
        } else {
            $("#errorMessage").css("display", "none");
            $("#success").css("display", "block");
        }
        
    });
    
});