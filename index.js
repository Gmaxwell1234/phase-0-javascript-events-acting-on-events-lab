const dodger = document.getElementById("dodger");

dodger.style.left = "0px"; // Ensure the dodger has an initial position

function moveDodgerLeft() {
    let left = parseInt(dodger.style.left.replace("px", ""));
    if (left > 0) {
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight() {
    let left = parseInt(dodger.style.left.replace("px", ""));
    if (left < 360) { // Assuming the game area is 400px wide and dodger is 40px wide
        dodger.style.left = `${left + 10}px`;
    }
}

// Optional: Add event listeners for arrow key movement
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
        moveDodgerRight();
    }
});
