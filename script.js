// Define the correct sequence of item clicks
let correctSequence = ['Light', 'Key', 'Book', 'Star', 'Glass', 'Treasure'];

// Object to track whether an area has been found
let foundAreas = {};

// Function to handle player exploration
function explore(areaName, imageUrl) {
    playClickSound(); // Play click sound

    // Check if the clicked area matches the next expected item in the sequence
    if (correctSequence[0] === areaName && !foundAreas[areaName]) {
        // If the clicked area matches the expected item, remove it from the sequence
        correctSequence.shift();

        // Create a new image element for the found item
        const foundItem = document.createElement('div');
        foundItem.className = 'found-item';
        const itemImage = new Image();
        itemImage.src = imageUrl;
        foundItem.appendChild(itemImage);

        // Append the found item image to the found items container
        document.getElementById('found-items').appendChild(foundItem);

        // Mark the area as found
        foundAreas[areaName] = true;

        // Check if all items have been found
        if (correctSequence.length === 0) {
            // Display the final treasure item separately
            const treasureItem = document.createElement('div');
            treasureItem.className = 'found-item';
            const treasureImage = new Image();
            treasureImage.src = imageUrl;
            treasureImage.id = 'treasure-item';
            treasureItem.appendChild(treasureImage);
            document.getElementById('game-frame').appendChild(treasureItem); // Append to game frame container
        }
    } else {
        // If the clicked area does not match the next expected item in the sequence,
        // and the area has not been found yet, display "LOCKED" message
        if (!foundAreas[areaName]) {
            displayOutputAtCenter("LOCKED", event.clientX, event.clientY);
            // Hide the "LOCKED" message after 5 seconds
            setTimeout(() => {
                hideOutput();
            }, 5000);
        }
        return; // Exit the function if the area is not found
    }

    // Check if the clicked area is the final "Treasure" area and all other items have been found
    if (areaName === 'Treasure' && correctSequence.length === 0) {
        playWinSound(); // Play win sound
    }
}

// Function to reset the game
function resetGame() {
    // Clear the found items container
    document.getElementById('found-items').innerHTML = '';
   
    // Reset the found areas object
    foundAreas = {};

    // Reset the correct sequence
    correctSequence = ['Light', 'Key', 'Book', 'Star', 'Glass', 'Treasure'];

    // Remove the treasure item if it was displayed
    const treasureItem = document.getElementById('treasure-item');
    if (treasureItem) {
        treasureItem.remove();
    }
}

// Function to play click sound
function playClickSound() {
    const clickSound = new Audio('https://opengameart.org/sites/default/files/Menu%20Selection%20Click.wav');
    clickSound.play();
}

// Function to play win sound
function playWinSound() {
    const winSound = new Audio('https://opengameart.org/sites/default/files/Komiku_-_11_-_Trop_la_win_0.mp3');
    winSound.play();
}

// Function to display output at the center of the screen (dummy function, replace with actual implementation)
function displayOutputAtCenter(message, x, y) {
    // Your implementation here
}

// Function to hide output (dummy function, replace with actual implementation)
function hideOutput() {
    // Your implementation here
}
