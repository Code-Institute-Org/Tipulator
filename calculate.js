// Other than arithmetic, the repeated pattern here is the access to
// an element via its ID to read or write data:
// Reads:
//          Access the form based on its id
//          Then read 3 input values based on their name attributes
// Writes:
//          Write the new calculated tip value
//          Un-hide the tip element by removing the "hidden" class

function calculateTip() {
    // Get the form values
    var form = document.getElementById('tip-calculator');
    var billAmount = form.billAmount.value;
    var serviceQuality = form.serviceQuality.value;
    var numOfPeople = form.numOfPeople.value;

    // Calculate the tip
    var total = (billAmount * serviceQuality) / numOfPeople;
    var formattedTotal = total.toFixed(2);

    // Show the result
    document.getElementById("tip").innerText = formattedTotal;
    document.getElementById("total-tip").classList.remove("hidden");
}
