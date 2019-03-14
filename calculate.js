// Other than arithmetic, the repeated pattern here is the access to 
// an element via its ID: 
// 4 reads
// 2 writes:
//          1 write to style 
//          1 write to HTML

function calculateTip() {
    var form = document.getElementById('tip-calculator');

    //    Trigger form validation and possible messages.
    //    If all is well, calculate the tip.
    //    FYI: reportValidity() is relatively new. It is supported on all major browsers
    //    but not microsft edge MOBILE.
    //    Not only does it trigger the form validation, 
    //    it also triggers the validation bubbles on the screen. Nice.
    //    Using this approach circumvents the need for additional boolean checks in the JS code
    //    that will confuse and/or scare off workshop attendees.
    
    //  This will be the student version
    //  To keep the code length to a minimum, I'll only include isNAN input checks in a model solution. 

    if (form.reportValidity() == true) {
        //get the form values
        var billAmount = document.getElementById("bill-amount").value;
        var serviceQuality = document.getElementById("service-quality").value;
        var numOfPeople = document.getElementById("people-amount").value;

        //calculate the tip
        // use multiple variables make it easier to understand
        var total = (billAmount * serviceQuality) / numOfPeople;
        var roundedtotal = Math.round(total * 100) / 100;
        var fixedtotal = roundedtotal.toFixed(2);

        // show the result
        document.getElementById("total-tip").style.visibility = "visible";
        document.getElementById("tip").innerHTML = fixedtotal;
    }
}
