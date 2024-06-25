const boxes = document.querySelectorAll(".box")
const current = document.querySelector(".current-player")

const gamebtn = document.querySelector(".btn")
let currentplayer;
let gamegrid;
const wiiningposition = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
]

function initgame() {
    currentplayer = "X";
    gamegrid = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box, index) => {
        boxes[index].innerText = "";
        boxes[index].style.pointerEvents = "all";
        box.classList = `box box${index + 1}`
    })
    gamebtn.classList.remove("active");
    current.innerText = `current-player-${currentplayer}`;
}
initgame();

function checkgameove() {
    console.log("alok chaudhary")
    let answer = "";
    wiiningposition.forEach((position) => {
        if ((gamegrid[position[0]] !== "" || gamegrid[position[1]] !== "" || gamegrid[position[2]] !== "") && (gamegrid[position[0]] === gamegrid[position[1]]) && (gamegrid[position[1]] === gamegrid[position[2]])){ 
            if (gamegrid[position[0]] ==="X") {
                answer = "X";
                console.log("alok chaudhary1")
            }

            else 
                answer = "Y";
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
            console.log("alok chaudhary2")}

        });
    if (answer !== "") {
        console.log("alok chaudhary3")
        current.innerText = `winner player-${answer}`;
        gamebtn.classList.add("active");
        return;
    }
    let fillcount = "";
    gamegrid.forEach((box) => {
        if (box !== "")
            fillcount++;
    })
    if (fillcount === 9) {
        current.innerText = "GAME TIED"
        gamebtn.classList.add("active")
    }


}
function handleclick(index) {
    if (gamegrid[index] === "") {
        boxes[index].innerText = currentplayer;
        gamegrid[index] = currentplayer;
        console.log("alok");
        /*boxes[index].Style.pointerEvents="none";*/

        swapTurn();
        checkgameove();
    }
}




function swapTurn() {
    if (currentplayer === "X") {
        currentplayer = "0";
    }
    else {
        currentplayer = "X";
    }
    current.innerText = `current-player-${currentplayer}`;
}




boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleclick(index)
    })
})


gamebtn.addEventListener("click", initgame)

