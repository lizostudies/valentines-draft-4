$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Open envelope function
    function open() {
        envelope.addClass("open").removeClass("close");
    }

    // Close envelope function
    function close() {
        envelope.addClass("close").removeClass("open");
    }
});

// Function to handle button click events
function selectOption(option) {
    if (option === 'yes') {
        // Flash rainbow colors and after that, display the cat heart image
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of the "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by a factor of 2
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval); // Stop the interval after 2 seconds
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback(); // Execute the callback (displaying the cat-heart image)
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    var imageContainer = document.getElementById('image-container');
    var catHeartImage = new Image();
    catHeartImage.src = 'cat-heart.gif'; // Path to the image
    catHeartImage.alt = 'Cat Heart';
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        document.getElementById('options').style.display = 'none'; // Hide the options container
    };
}
