// GUESS 1 ///////////////////
// "Guess who is Joseph"
// Correct :)
// let guess = {
//     hair_colour: "red",
//     eye_colour: "blue",
//     hat: false,
//     glasses: true,
//     firstName: "Joseph"
// };

// const guessWho = function(){
//     return `Guess who is ${guess.firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);


// GUESS 2 ///////////////////
// "guess1: `Guess Who is Liz`"
// error
// Got this wrong: guess2 still runs because it just uses the first declaration of firstName ("Donna")

// let firstName = "Donna";

// const guessWho = function(){
//     const glasses = false;
//     let firstName = "Liz";
//     return `Guess Who is ${firstName}.`;
// }

// const guess1 = guessWho();
// console.log("guess1: ", guess1);

// const guess2 = `Guess Who is ${firstName}`;
// console.log("guess2: ", guess2);


// GUESS 3 ///////////////////
// changeHat() makes hat true --> changeGuess so firstName = 'Chris' -->finalAnswer = Chris
// Correct :)

// const guess = {
//     hair_colour: "black",
//     eye_colour: "brown",
//     hat: false,
//     glasses: false,
//     firstName: "Andy"
// }

// const changeHat = function(){
//     guess.hat = !guess.hat;
// }

// const changeGuess = function(newName){
//     guess.firstName = newName;
// }

// const guessWho = function(){
//     return `Guess Who is ${guess.firstName}`
// }

// changeHat();

// if(guess.hat){
//     changeGuess("Chris");
// }

// const finalAnswer = guessWho();
// console.log(finalAnswer);


// // GUESS 4 ///////////////////

// let firstName = "Gail";

// if ( firstName === "Gail"){
//     let firstName = "Ashley";
// }

// const guessWho = function(){
//     return `Guess Who is ${firstName}`
// }

// const finalAnswer = guessWho();
// console.log(finalAnswer);


// GUESS 5 ///////////////////
// changeGuess() --> error because you cannot reassign a constant.
// "Guess Who is Jennifer"
// Wrong! it doesn't compile because of the attempt to reassign

const guess = {
    hair_colour: "blonde",
    eye_colour: "brown",
    hat: false,
    glasses: false,
    firstName: "Jennifer"
}

const changeGuess = function(){
    guess = {
        hair_colour: "blonde",
        eye_colour: "blue",
        hat: false,
        glasses: false,
        firstName: "Kyle"
    }
}

changeGuess();
console.log(`Guess Who is ${guess.firstName}`);

