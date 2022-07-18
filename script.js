let dmButton = document.querySelector("button#darkMode");

let setDark = function() {
    let main = document.querySelector("main");
    let body = document.querySelector("body");
    if (main.style.backgroundColor === "black") {
        main.style.backgroundColor = "white";
        main.style.color = "black";
        body.style.backgroundColor = "white";
        dmButton.style.backgroundColor = "black";
        dmButton.style.color = "white";
        dmButton.textContent = "Dark Mode";
    } else {
        main.style.backgroundColor = "black";
        main.style.color = "white";
        body.style.backgroundColor = "black";
        dmButton.style.backgroundColor = "white";
        dmButton.style.color = "black";
        dmButton.textContent = "Light Mode";
    }
}

dmButton.addEventListener("click", setDark);