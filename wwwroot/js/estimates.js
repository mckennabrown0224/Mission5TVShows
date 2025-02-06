$(document).ready(function () {

    //setting variables for output
    let errorMessage = $("#error-message");
    let hoursInput = $("#hoursInput");
    let totalCostField = $("#totalCost");
    let rate = 20.00; // Hourly rate

    // Prevent invalid characters & clear bad input
    hoursInput.on("input", function () {
        let value = $(this).val().trim();

        // Check if the input is a positive number
        if (!/^\d*\.?\d+$/.test(value) || parseFloat(value) <= 0) {
            errorMessage.removeClass("d-none").text("Please enter a valid number of hours.");
            $(this).val(""); // Clear the invalid input
            totalCostField.val(""); // Also clear total cost
        } else {
            errorMessage.addClass("d-none"); // Hide error message if valid
        }
    });

    // Calculate total cost when button is clicked
    $("#calculateBtn").click(function () {

        let hours = hoursInput.val().trim();
        let hoursNum = parseFloat(hours);

        // Ensure the input is valid before calculating
        if (isNaN(hoursNum) || hoursNum <= 0) {
            errorMessage.removeClass("d-none").text("Please enter a valid number before calculating.");
            totalCostField.val(""); // Clear total cost
        } else {
            errorMessage.addClass("d-none"); // Hide error message
            let total = hoursNum * rate;
            totalCostField.val(`$${total.toFixed(2)}`); // Display total cost
        }
    });
});

