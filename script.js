document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const clickButton = document.getElementById('actionButton');
    const outputDiv = document.getElementById('output');
    let clickCount = 0;

    // Add event listener to the button
    clickButton.addEventListener('click', () => {
        // Increment the counter
        clickCount++;
        
        // Update the output div content
        outputDiv.textContent = `The button has been clicked ${clickCount} time(s). Keep going!`;
    });
});