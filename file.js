// let container = document.querySelector("#container");
// let dino = document.querySelector("#dino");
// let block = document.querySelector("#block");
// let road = document.querySelector("#road");
// let cloud = document.querySelector("#cloud");
// let score = document.querySelector("#score");
// let gameOver = document.querySelector("#gameOver");

// // Declaring variable for score
// let interval = null;
// let playerScore = 0;

// // Function for score
// let scoreCounter = () => {
//     playerScore++;
//     score.innerHTML = `Score <b>${playerScore}</b>`;
// }

// // Start Game
// window.addEventListener("keydown", (start) => {
//     if (start.code == "Space") {
//         gameOver.style.display = "none";
//         block.classList.add("blockActive");
//         road.querySelector("img").style.animation = "roadAnimate 1.5s linear infinite";
//         cloud.querySelector("img").style.animation = "cloudAnimate 50s linear infinite";

//         // Start scoring
//         playerScore = 0;  // Reset score when game starts
//         interval = setInterval(scoreCounter, 200);
//     }
// });

// // Jump Character
// window.addEventListener("keydown", (e) => {
//     if (e.key == "ArrowUp" && !dino.classList.contains("dinoActive")) {
//         dino.classList.add("dinoActive");

//         // Remove class after 0.5 seconds
//         setTimeout(() => {
//             dino.classList.remove("dinoActive");
//         }, 500);
//     }
// });

// // 'Game Over' if 'Character' hits the 'Block'
// let result = setInterval(() => {
//     let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
//     let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));

//     if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
//         // Game Over scenario
//         gameOver.style.display = "block";
//         block.classList.remove("blockActive");
//         road.querySelector("img").style.animation = "none";
//         cloud.querySelector("img").style.animation = "none";
//         clearInterval(interval);
//         playerScore = 0;
//     }
// }, 10);

let container = document.querySelector("#container");
let dino = document.querySelector("#dino");
let block = document.querySelector("#block");
let road = document.querySelector("#road");
let cloud = document.querySelector("#cloud");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

//declaring variable for score
let interval = null;
let playerScore = 0;


//function for score
let scoreCounter = () => {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}


//start Game
window.addEventListener("keydown", (start) => {
    //    console.log(start);
    if (start.code == "Space") {
        gameOver.style.display = "none";
        block.classList.add("blockActive");
        road.firstElementChild.style.animation = "roadAnimate 1.5s linear infinite";
        cloud.firstElementChild.style.animation = "cloudAnimate 50s linear infinite";

        //score
        let playerScore = 0;
        interval = setInterval(scoreCounter, 200);
    }
});


//jump Your Character
window.addEventListener("keydown", (e) => {
    //    console.log(e);

    if (e.key == "ArrowUp")
        if (dino.classList != "dinoActive") {
            dino.classList.add("dinoActive");

            //                remove class after 0.5 seconds
            setTimeout(() => {
                dino.classList.remove("dinoActive");
            }, 500);
        }
});

//'Game Over' if 'Character' hit The 'Block' 
let result = setInterval(() => {
    let dinoBottom = parseInt(getComputedStyle(dino).getPropertyValue("bottom"));
    //    console.log("dinoBottom" + dinoBottom);

    let blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left"));
    //    console.log("BlockLeft" + blockLeft);

    if (dinoBottom <= 90 && blockLeft >= 20 && blockLeft <= 145) {
        //        console.log("Game Over");

        gameOver.style.display = "block";
        block.classList.remove("blockActive");
        road.firstElementChild.style.animation = "none";
        cloud.firstElementChild.style.animation = "none";
        clearInterval(interval);
        playerScore = 0;
    }
}, 10);
