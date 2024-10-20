const canvas = document.getElementById('coloringCanvas');
const ctx = canvas.getContext('2d');
let currentColor = 'black';

// Function to set the selected color
function changeColor(color) {
    currentColor = color;
}

// Draw shapes (You can replace these with more complex shapes or outlines)
function drawShapes() {
    ctx.fillStyle = 'lightgray';
    ctx.fillRect(50, 50, 100, 100); // Box 1
    ctx.fillRect(200, 50, 100, 100); // Box 2
    ctx.fillRect(350, 50, 100, 100); // Box 3

    ctx.fillStyle = 'lightgray';
    ctx.beginPath();
    ctx.arc(150, 250, 50, 0, Math.PI * 2); // Circle
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(300, 250);
    ctx.lineTo(250, 350);
    ctx.lineTo(350, 350);
    ctx.closePath(); // Triangle
    ctx.fill();
}

canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if clicked within the rectangle or circle
    if (x > 50 && x < 150 && y > 50 && y < 150) {
        ctx.fillStyle = currentColor;
        ctx.fillRect(50, 50, 100, 100);
    } else if (x > 200 && x < 300 && y > 50 && y < 150) {
        ctx.fillStyle = currentColor;
        ctx.fillRect(200, 50, 100, 100);
    } else if (x > 350 && x < 450 && y > 50 && y < 150) {
        ctx.fillStyle = currentColor;
        ctx.fillRect(350, 50, 100, 100);
    } else if (Math.hypot(x - 150, y - 250) < 50) { // Circle detection
        ctx.fillStyle = currentColor;
        ctx.beginPath();
        ctx.arc(150, 250, 50, 0, Math.PI * 2);
        ctx.fill();
    } else if (x > 250 && x < 350 && y > 250 && y < 350) { // Triangle detection
        ctx.fillStyle = currentColor;
        ctx.beginPath();
        ctx.moveTo(300, 250);
        ctx.lineTo(250, 350);
        ctx.lineTo(350, 350);
        ctx.closePath();
        ctx.fill();
    }
});

// Draw shapes initially
drawShapes();
