// script.js

// Select the button and color code element
const colorBtn = document.getElementById('colorBtn');
const colorCode = document.getElementById('colorCode');

// Function to generate random color in hexadecimal format
function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
}

// Event listener for the button click
colorBtn.addEventListener('click', () => {
    const newColor = generateRandomColor();  // Generate a new random color
    document.body.style.backgroundColor = newColor;  // Change the background color
    colorCode.textContent = newColor;  // Update the color code text
});
