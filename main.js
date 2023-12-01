// let area = document.querySelector(".area");

// let mySpan = document.querySelector(".area span");


// window.addEventListener("load", () => {
//     window.setInterval(() => {
//         mySpan.textContent ="Frontend-Developper."
//     }, 1000);
// })

let area = document.querySelector(".area");
let mySpan = document.querySelector(".area span");

window.addEventListener("load", () => {
    const text = "Frontend-Developer.";
    let index = 0;

    const intervalId = window.setInterval(() => {
        mySpan.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            clearInterval(intervalId);
        }
    }, 100);
});