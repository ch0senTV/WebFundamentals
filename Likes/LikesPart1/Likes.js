var count;

document.addEventListener("DOMContentLoaded", function() {
    count = document.getElementById("likeNumber");
});

function clickTheButton() {
    count.innerHTML = +count.innerHTML + 1;
}
