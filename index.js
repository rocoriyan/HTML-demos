const domDiv = document.querySelector(".domedit img");

domDiv.addEventListener('mouseover', () => {
    domDiv.src = "media/Glenn-2.png";
    document.querySelector(".domedit p").innerText = "Hover";
});

domDiv.addEventListener('mouseout', () => {
    domDiv.src = "media/Glenn-1.png";
    document.querySelector(".domedit p").innerText = "No hover";
})