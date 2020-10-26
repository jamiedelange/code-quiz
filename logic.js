var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

var listScoresEl = document.createElement("ol");

for (var i = 0; i < highScores.length; i++) {
    var scoreListEl = document.createElement("li");
    scoreListEl.appendChild(listScoresEl);
}

scoreListEl.appendChild(scorelist);






    
    
    
    
    /* var listScores = document.createElement("li");
    listScores.className = "user-initials-class";
    listScores.setAttribute("id", "user-initials" + user-initials);
    listScores.setAttribute("value", enterInitial);
    listScores.textContent = enterInitial + " " + highScores;
    scorelist.appendChild(listScores); */