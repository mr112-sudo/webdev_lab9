// Get references to the elements
const entryButton = document.getElementById('entrybutton');
const entryInput = document.getElementById('entryinput');
const textOutput = document.getElementById('textoutput');

// Add click event listener to the Alert Me div
entryButton.addEventListener('click', function() {
    // Get the value from the text input
    const inputValue = entryInput.value;
    
    // Show alert with your name prepended
    alert('Charles: ' + inputValue);
    
    // Change the h2 text to the input value
    textOutput.textContent = inputValue;
});
