/* ---- "A Developer / A Problem-Solver" typing effect ---- */
const texts = ["Coder", "Developer", "Problem-Solver"];
let index = 0;
let charIndex = 0;
let currentText = "A ";
const typingSpeed = 50;
const erasingSpeed = 50;
const newTextDelay = 1000;

function type() {
    if (charIndex < texts[index].length) {
        currentText += texts[index].charAt(charIndex);
        document.getElementById("alternating-text").textContent = currentText;
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        currentText = currentText.substring(0, currentText.length - 1);
        document.getElementById("alternating-text").textContent = currentText;
        charIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(type, typingSpeed + 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    currentText = "A ";
    setTimeout(type, newTextDelay + 250);
});