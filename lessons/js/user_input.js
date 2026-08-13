// Function to save the name to local storage
function saveName() {
    const nameInput = document.getElementById('name').value;

    // Save to Local Storage
    localStorage.setItem('savedUsername', nameInput);

    // Update the display text immediately
    displaySavedName();
}

// Function to read from local storage and update the page
function displaySavedName() {
    const storedName = localStorage.getItem('savedUsername');
    const displaySpan = document.getElementById('displayName');

    if (storedName) {
        displaySpan.textContent = storedName;
    } else {
        displaySpan.textContent = "None";
    }
}

// Automatically load and display the saved name when the page refreshes
window.onload = displaySavedName;
