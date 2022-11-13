let homeScore = document.getElementById("h-num")
let guestScore = document.getElementById("g-num")
let hScore = 0
let gScore = 0

//HOME POINTS
function hp1() {
    hScore += 1
    homeScore.innerText = hScore
}

function hp2() {
    hScore += 2
    homeScore.innerText = hScore
}

function hp3() {
    hScore += 3
    homeScore.innerText = hScore
}

//GUEST POINTS
function gp1() {
    gScore += 1
    guestScore.innerText = gScore
}

function gp2() {
    gScore += 2
    guestScore.innerText = gScore
}

function gp3() {
    gScore += 3
    guestScore.innerText = gScore
}

//NEW GAME
function newGame(){
    homeScore.innerText = 0
    guestScore.innerText = 0
    hScore = 0
    gScore = 0

}


//Highlight home

function leader() {

    //Home
    if (hScore > gScore) {
        homeScore.style.textDecoration = "underline";
        guestScore.style.textDecoration = "none";
    }

    //Guest
    if (gScore > hScore) {
        guestScore.style.textDecoration = "underline";
        homeScore.style.textDecoration = "none";
    }

    //Even
    if (gScore == hScore) {
        homeScore.style.textDecoration = "none";
        guestScore.style.textDecoration = "none";
    }
}

