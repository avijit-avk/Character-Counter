const nameInput = document.getElementById("input");
const countButton = document.getElementById("count");

countButton.addEventListener("click", () => {
    const text = nameInput.value; // Get the input text
    countButton.textContent = `Count: ${text.length}`; // Update button text
});
