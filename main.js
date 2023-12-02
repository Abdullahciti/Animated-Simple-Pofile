let div = document.querySelector(".my-div");
let span = document.querySelector(".my-span");
let text = "Frontend-Developer.";

function hi() {
  let index = 0;
  let direction = 1; // 1 for forward, -1 for backward

  function updateText() {
    span.textContent = text.slice(0, index);
    index += direction;

    if (index >= text.length || index < 0) {
      setTimeout(() => {
        direction *= -1; // Reverse the direction when reaching the end or beginning
        index += 2 * direction; // Adjust index to avoid skipping characters
      }, 1000);
    }
  }

  let myInterval = setInterval(updateText, 150);
}

hi();
