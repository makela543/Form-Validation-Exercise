$(document).ready(function() {
    
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    
    
    $("#submitButton").click(function() {
        
        var errorMessage = "";
        
        if (isEmail($("#email").val()) == false) {
            
            errorMessage += "<p>Your email address is not valid.</p>";
            
        }
        
        if ($.isNumeric($("phone").val()) == false) {
            
            errorMessage += "<p>Your phone number is not numeric.</p>";
            
        }
        
    });
    
    
    
});