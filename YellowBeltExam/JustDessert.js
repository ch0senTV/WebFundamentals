//join function
document.getElementById('joinBtn').addEventListener('click', function() {
    this.style.display = 'none';
});
//like function
var likeButtons = document.querySelectorAll('.likeBtn');
likeButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
        var likeCount = this.previousElementSibling;
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    });
});
//search function
document.getElementById('searchButton').addEventListener('click', function() {
    var searchQuery = document.getElementById('searchInput').value;
    alert("The page says: you are searching for \"" + searchQuery + "\"");
});
