function computeViews() {
    // Retrieve input values and parse them as floats
    var percentageViewed = parseFloat(document.getElementById('field1').value);
    var percentageChoseToView = parseFloat(document.getElementById('field2').value);
    var videoLength = parseFloat(document.getElementById('field3').value);

    // Check for valid inputs
    if (isNaN(percentageViewed) || isNaN(percentageChoseToView) || isNaN(videoLength)) {
        document.getElementById('result').innerText = "Please enter valid numbers in all fields.";
        return;
    }

    // Calculate Log_Views using the provided formula
    var logViews = -7.0629 + (0.0488 * percentageViewed) + (0.1816 * percentageChoseToView) + (0.0636 * videoLength);

    // Calculate Views
    var views = Math.exp(logViews) - 1;

    // Handle potential negative or undefined results
    if (views < 0 || isNaN(views) || !isFinite(views)) {
        document.getElementById('result').innerText = "The calculation resulted in an invalid number of views. Please check your inputs.";
        return;
    }

    // Format the result to an integer with commas
    var viewsFormatted = Math.round(views).toLocaleString();

    // Display the result
    document.getElementById('result').innerText = viewsFormatted;
}
