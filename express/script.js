function plus(id) {
    let life = parseInt(document.getElementById(id).innerHTML)
    document.getElementById(id).innerHTML = life + 1;
}

function minus(id) {
    let life = parseInt(document.getElementById(id).innerHTML)
    document.getElementById(id).innerHTML = life - 1;
}

function reset() {
    document.getElementById("toplife1").innerHTML = startingLife;
    document.getElementById("toplife2").innerHTML = startingLife;
    document.getElementById("bottomlife1").innerHTML = startingLife;
    document.getElementById("bottomlife2").innerHTML = startingLife;
}

function changeSettings() {
    startingLife = document.getElementById("lifeSelect").value;
    if (document.getElementById("isCommander").value == "yes") {
        // show the extra trackers
        document.getElementById("topdiv").style.display = "grid";
        document.getElementById("topdiv2").style.display = "block";
        document.getElementById("bottomdiv").style.display = "grid";
        document.getElementById("bottomdiv2").style.display = "block";

        // Hide the 2 player color selectors
        document.getElementById("player").style.display = "none";
        document.getElementById("enemy").style.display = "none";

        // Show the commander color selectors
        document.getElementById("topLeft").style.display = "flex";
        document.getElementById("topRight").style.display = "flex";
        document.getElementById("bottomLeft").style.display = "flex";
        document.getElementById("bottomRight").style.display = "flex";

        // Set the color of the trackers to match the selectors
        document.getElementById("topdiv2").style.backgroundColor = document.getElementById("topLeftColorSelect").value;
        document.getElementById("topdiv1").style.backgroundColor = document.getElementById("topRightColorSelect").value;
        document.getElementById("bottomdiv1").style.backgroundColor = document.getElementById("bottomLeftColorSelect").value;
        document.getElementById("bottomdiv2").style.backgroundColor = document.getElementById("bottomRightColorSelect").value;
    } else if (document.getElementById("isCommander").value == "no") {

        // Hide the extra trackers
        document.getElementById("topdiv").style.display = "block";
        document.getElementById("topdiv2").style.display = "none";
        document.getElementById("bottomdiv").style.display = "block";
        document.getElementById("bottomdiv2").style.display = "none";

        // Show the 2 player color selectors
        document.getElementById("player").style.display = "flex";
        document.getElementById("enemy").style.display = "flex";

        // Hide the commander color selectors
        document.getElementById("topLeft").style.display = "none";
        document.getElementById("topRight").style.display = "none";
        document.getElementById("bottomLeft").style.display = "none";
        document.getElementById("bottomRight").style.display = "none";

        // Set the color of the trackers to match the selectors
        document.getElementById("playerbox").style.backgroundColor = document.getElementById("playerColorSelect").value;
        document.getElementById("enemybox").style.backgroundColor = document.getElementById("enemyColorSelect").value;
    }
}

// Setup
let startingLife = document.getElementById("lifeSelect").value;
document.getElementById("topdiv").style.display = "block";
document.getElementById("topdiv2").style.display = "none";
document.getElementById("bottomdiv").style.display = "block";
document.getElementById("bottomdiv2").style.display = "none";

document.getElementById("topLeft").style.display = "none";
document.getElementById("topRight").style.display = "none";
document.getElementById("bottomLeft").style.display = "none";
document.getElementById("bottomRight").style.display = "none";