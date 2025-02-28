let container = document.getElementById("container");
let ProfilePic = document.getElementById("ProfilePic");

ProfilePic.addEventListener('click', function() {
    let pop_up = document.createElement("div");
    pop_up.classList.add("pop_up");

    let image=document.createElement("img");
    image.src="me2.jpg";

    image.classList.add("pop_image");

    pop_up.append(image);

    let closeButton = document.createElement("button");
    closeButton.textContent = "❌";
    closeButton.style.marginTop = "10px"; // Style using JS or CSS
    closeButton.style.width="40px";
    closeButton.style.height="40px";
    closeButton.style.borderRadius="10px";

    closeButton.addEventListener("click", function() {
        container.removeChild(pop_up);
    });
    pop_up.appendChild(closeButton);

    container.appendChild(pop_up);
});