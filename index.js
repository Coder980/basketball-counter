let homeEl = document.getElementById("home-points")
let guestEl = document.getElementById("guest-points")


function plusPoints(team, points) {
    if (team === "home") {
        homeEl.textContent = Number(homeEl.textContent) + points
    } else {
        guestEl.textContent = Number(guestEl.textContent) + points
    }
    highlightWinner()
}

function highlightWinner() {
    if (Number(homeEl.textContent) > Number(guestEl.textContent)) {
        homeEl.style.color = "#ffbe0b"
        guestEl.style.color = "#F94F6D"
    }
    else if (Number(guestEl.textContent) > Number(homeEl.textContent)) {
        guestEl.style.color = "#ffbe0b"
        homeEl.style.color = "#F94F6D"
    }
    else {
        homeEl.style.color = "#F94F6D"
        guestEl.style.color = "#F94F6D"
    }
}

function newGame() {
    guestEl.textContent = 0
    guestEl.style.color = "#F94F6D"
    homeEl.textContent = 0
    homeEl.style.color = "#F94F6D"
}