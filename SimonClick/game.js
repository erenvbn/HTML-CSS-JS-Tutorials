//List of all Buttons in HTML File
var buttonArray = $(".btn");
var buttonIdsArr = ["green", "red", "yellow", "blue"];

//Writing Id's into an Array
function getIdsofButtons() {
    var extractionId = buttonArray.map(function () {
        return this.id;
    }).get();
    //console.log(extractionId); (DİKKAT BU ÇİFT YAZDIRIYOR)
}

var son = $(".btn").id;

//Random Number Generator Between 0-3 for array index
function generateRandomButton() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

//Random Button Ringer
function randomButtonRinger(randomIndex) {

    var animationDuration = 100;
    $(buttonArray[randomIndex]).animate({
        opacity: "0.2"
    }, animationDuration);
    $(buttonArray[randomIndex]).animate({
        opacity: "1.0"
    }, animationDuration);

    switch (randomIndex) {
        case 0:
            var audio0 = new Audio("sounds/green.mp3");
            audio0.play();
            break;

        case 1:
            var audio1 = new Audio("sounds/red.mp3");
            audio1.play();
            break;


        case 2:
            var audio2 = new Audio("sounds/yellow.mp3");
            audio2.play();
            break;


        case 3:
            var audio3 = new Audio("sounds/blue.mp3");
            audio3.play();
            break;

        default:
            console.log("a");
    }
}

//Color Animation
function playColorAnimation(clickedElement) {
    var animationDuration = 100;

    switch (clickedElement) {
        case "green":
            $(buttonArray[0]).animate({
                opacity: "0.2"
            }, animationDuration);
            $(buttonArray[0]).animate({
                opacity: "1.0"
            }, animationDuration);

            break;

        case "red":
            $(buttonArray[1]).animate({
                opacity: "0.2"
            }, animationDuration);
            $(buttonArray[1]).animate({
                opacity: "1.0"
            }, animationDuration);

            break;

        case "yellow":
            $(buttonArray[2]).animate({
                opacity: "0.2"
            }, animationDuration);
            $(buttonArray[2]).animate({
                opacity: "1.0"
            }, animationDuration);

            break;

        case "blue":
            $(buttonArray[3]).animate({
                opacity: "0.2"
            }, animationDuration);
            $(buttonArray[3]).animate({
                opacity: "1.0"
            }, animationDuration);

            break;

        default:
            break;
    }
}

//Play Sound When Click on a Button
function playClickedSound(clickedElement) {

    switch (clickedElement) {
        case "green":
            var audio0 = new Audio("sounds/green.mp3");
            audio0.play();
            break;

        case "red":
            var audio1 = new Audio("sounds/red.mp3");
            audio1.play();
            break;


        case "yellow":
            var audio2 = new Audio("sounds/yellow.mp3");
            audio2.play();
            break;


        case "blue":
            var audio3 = new Audio("sounds/blue.mp3");
            audio3.play();
            break;

        default:
            console.log("a");
    }
}

// PROGRAM

let isStart = false;
total_LevelNumber = 10;
var levelNumber = 2;
var randomElementArr = [];

//Pres A to Start
//Random Question Generator
document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA") {
        isStart = true;
        for(let j = 0; j < levelNumber; j++){
            (function(j){
                setTimeout(function(){
                    randomIndex = generateRandomButton();
                    var randomElement = buttonIdsArr[randomIndex];
                    randomElementArr.push(randomElement);
                    randomButtonRinger(randomIndex);
                    console.log(randomElementArr);
                }, 750 * j);
            }(j));
        }
    }
})

//Click and Answer
var clickedElementArr = [];
document.addEventListener('click', function (event) {
    var clickedElement = event.target.id;
    // if (buttonIdsArr.includes(clickedElement)){
    
    if (clickedElement == "green" || clickedElement == "red"|| clickedElement == "yellow" ||clickedElement == "blue"){
        clickedElementArr.push(clickedElement);
        playClickedSound(clickedElement);
        playColorAnimation(clickedElement);
        console.log(clickedElement);
        console.log(clickedElementArr);
    }else{
        //alert("Only Click on the Buttons");
    }
    

    //Check Whether It Is True
    if (clickedElement != [] && randomElementArr!=[] && clickedElementArr.length == randomElementArr.length ) {
        if (JSON.stringify(clickedElementArr) == JSON.stringify(randomElementArr)) {
        console.log("Listeler eşittir");

        //Transition Phase CSS When the Answer Is True

        $("h1").text("Congratulations, Next Stage");
        $("body").css("background-color", "#32ac31");
        $(".btn").addClass("pressed");
        $(".btn").animate({
            height: "220px",
            width: "220px",
            opacity: "0.5",
            borderRadius: "60%",
        }, 200);

        //New Level CSS When the Answer Is True
        setTimeout(() => {
            $("#level-title").text("Press A to Start Stage " + (levelNumber-1));
            $("body").css("background-color", "#364958");
            $(".btn").removeClass("pressed");
            $(".btn").animate({
                height: "200px",
                width: "200px",
                opacity: "1",
                borderRadius: "20%",
            }, 200);
        }, 1200);
        $("#level-title").text("You've Passed Stage " + (levelNumber-1));


        clickedElementArr = [];
        randomElementArr = [];
        isStart = false;
        levelNumber = levelNumber + 1;

        //Transition CSS When the Answer Is False
    } else {
        console.log("Listeler eşit değildir");
        $("#level-title").text("You've Lost");
        $("body").css("background-color", "red");
        setTimeout(() => {
            $("#level-title").text("Press A to Try Again");
            $("body").css("background-color", "#364958");
        }, 500);
        clickedElementArr = [];
        randomElementArr = [];
        isStart = false;
        levelNumber = levelNumber;
    }
}
}, false);