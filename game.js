var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
function playSound(randomChosenColour){
    switch (randomChosenColour) {
        case "red":    
            var audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "blue":    
            var audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;
        case "green":    
            var audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case "yellow":    
            var audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            break;        
        default:
            alert("randomChosenColour is not working");
            break;
    }
}
function nextSequence(){
    userClickedPattern=[];
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
}
function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}
function startOver(){
    level=0;
    gamePattern=[];
}
function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000);
            
        }
    }
    else{
        console.log("Fail");
        var audio = new Audio("./sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 2000);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    
}
$(".btn").click(function(ent){
    var userChosenColour=ent.target.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer((userClickedPattern.length)-1);

})
$(document).keypress(function(){
    if(level===0){
        $("h1").text("Level "+level);
        nextSequence();
    }
});