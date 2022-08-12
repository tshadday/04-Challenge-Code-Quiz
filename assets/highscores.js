var playerTable = document.getElementById("highscores")

function showScores() {
    var player = localStorage.getItem('Initials');
    var score = localStorage.getItem('Score');

    for (i = 0; i < player.length; i++) {
        playerTable.textContent = `<li> Player: ${player} Score: ${score}`;
    }
}

function deleteScores() {
    if (confirm('Are you sure you want to delete all scores?') === true) {
        playerTable.textContent = "";
    };
};