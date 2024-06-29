const domDiv = document.querySelector(".domedit");

domDiv.addEventListener('mouseover', () => {
    document.querySelector(".domedit img").src = "media/Glenn-2.png";
    document.querySelector(".domedit p").innerText = "Hover";
});

domDiv.addEventListener('mouseout', () => {
    document.querySelector(".domedit img").src = "media/Glenn-1.png";
    document.querySelector(".domedit p").innerText = "No hover";
})