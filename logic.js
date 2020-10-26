var highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];

highScores.forEach(function(element, index) {
    console.log(element);
    document.getElementById("scorelist").innerHTML += index + ": " + element.initials + " - " + element.score  + "<br>"
})
