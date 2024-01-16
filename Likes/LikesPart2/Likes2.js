var likeArray = [document.querySelector("#like-Dmitriy"), document.querySelector("#like-Svetlana"), document.querySelector("#like-Artyom")];

function clickTheButton(likeIndex) {
    likeArray[likeIndex].innerText++;
}
