// The first step is to make random number generator for our fisrt dice 
// This will generate random number betweeen 1-6

var randomnumber1 = Math.floor((Math.random() * 6) + 1);

// Now the next stepis to change the source of img form static to any random img of dice betwwn 1-6 . we can do this by creating a cariable which links the random number and thename of the img 

var randomimgsrc1 = "images/dice"+ randomnumber1 +  ".png" ; //creating random img

// selecting the img srcattribute using query selector and changing it to randomimgsrc1
document.querySelectorAll("img")[0].setAttribute("src",randomimgsrc1);

//repeat the sam procedure for the 2nd dice
var randomnumber2= Math.floor((Math.random() * 6) + 1);
var randomimgsrc2 = "images/dice"+ randomnumber2 +  ".png" ; 
document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc2);

// Next step is to change the heading of the page to name of player who wins

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="player 1 wins !";
}
else if(randomnumber1===randomnumber2) {
    document.querySelector("h1").innerHTML=" Its a tie !";
}
else{
    document.querySelector("h1").innerHTML=" Player 2 wins !";
}