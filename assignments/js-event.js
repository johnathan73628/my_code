const title = document.getElementById('title');
const btn = document.getElementById('btn');
const inputField = document.getElementById('name');
const output = document.getElementById('output');


// Clicking the button changes the heading
btn.addEventListener('click', function() {
    title.textContent = "Welcome to Sunny Kennel Nigeria";
});

// Typing inside the input displays the typed text below it
inputField.addEventListener('input', function() {
    output.textContent = inputField.value;
});

// Hovering over the button changes its background color
btn.addEventListener('mouseenter', function() {
    btn.style.backgroundColor = 'blue';
});
btn.addEventListener('mouseleave', function() {
    btn.style.backgroundColor = '';
});


document.addEventListener('keydown', function(event) {
    // Prevents shortcuts from firing while typing inside the text field
    if (document.activeElement === inputField) {
        return;
    }

    // Handles both lowercase and uppercase keys
    const key = event.key.toUpperCase();

    // Change the background color
    if (key === 'B') {
        document.body.style.backgroundColor = 'lightgreen';
    }
    
    // Reset the page
    else if (key === 'R') {
        document.body.style.backgroundColor = '';
        title.textContent = "Layer7554 Tech";
        title.style.display = 'block';
        inputField.value = '';
        output.textContent = '';
    }
    
    // Hide the heading
    else if (key === 'H') {
        title.style.display = 'none';
    }
    
    else if (key === 'S') {
        title.style.display = 'block';
    }
});
