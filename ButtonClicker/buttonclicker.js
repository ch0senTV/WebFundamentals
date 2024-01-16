let isLoggedIn = false;

function logInOut() {
    isLoggedIn = !isLoggedIn;
    document.getElementById('login').innerText = isLoggedIn ? 'Sign Out' : 'Sign In';
}

function like(element) {
    alert("Ninja was liked");

    let currentLikes = parseInt(element.innerText, 10);

    if (!isNaN(currentLikes)) {
        element.innerText = currentLikes + 1;
    } else {
        console.error("Error: Invalid");
    }
}

function addDefinition() {
    alert("Add definition button clicked");
    hide(document.getElementById("userDefinedBox"));
}

function hide(element) {
    element.style.display = "none";
}
