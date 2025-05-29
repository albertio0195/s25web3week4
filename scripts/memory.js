

//create global variables
let colourPool = ["red", "red", "orange", "orange", "yellow", "yellow", "green", "green", "blue", "blue", "purple", "purple"];
//when the user clicks on a card for the first time, we'll pick a random colour from this array and assign it to that card

//clickedCards will store the cards the user is currently clicking on, by ID - when two cards are in the array, we'll check if there is a matching ID, and if there is, then there is a match.  However, if the IDs do not match, then we'll flip the two cards back over
let clickedCards = [];

//these two globals are to keep track of the user's progress - one for their score, and one for the number of moves
let score=0, moves=0;
//you can declare multiple variables with one 'let' keyword, by separating them with commas

/********************************
 * 	Scripts added in class
********************************/

//use a loop to add multiple cards
// a for loop has three parts 
// set the counter variable (let i=0) and start it at a number 
// give the loop a conditon to keep counting 
// set the increment (i++)
for (let i=0; i<12; i++){
//creat the new card (a div element)
const card = document.createElement("div");
//create a paragraph element
const para = document.createElement("p")
//add the queston mark inside the paragraph element
para.textContent = "?";

//add the new paragraph to the card 
card.appendChild(para);
//add the class "card" to the new element
card.classList.add("card");

//add an event listerner to card, when the user clicks on it, 
// when the user clicks on the card, we'll run the flipCard function
card.addEventListener("click", flipCard);

//add the card to the main element
document.querySelector("main").appendChild(card);
}

// when user click on the card....
function flipCard() {
    if(this.className !== "cardFlipped") {
        // Change the card's class to cardFlipped 
    this.className = "cardFlipped";
        
        // Get a random colour between 0 and 11
    let ran = Math.floor(Math.random() * 12);
 
    //based on the random number, assing the card an ID (From the colourPool array)
    this.id = colourPool[ran];

    // since the card has ben clicked,add it ti the array that holds which card are clicked
   //.puch adds somethings to the end of an array
    clickedCards.push(this);
    // console.log(clickedCards);

        // CHECK IF THERE ARE TWO CARDS IN THE ARRAY
        //THEN CHECK IF THEY MATCH
        if(clickedCards.length == 2){
           //check to see if cards have the same id 
           if(clickedCards[0].id == clickedCards[1].id){
            createOverlay("Match!");
           }else{
            //call the functon to create and overlay message
            createOverlay("No Match!");
            // if they don't match, flip them back over
        
            clickedCards.forEach(function(thisCard){
                thisCard.className = "card";
            });
           }
           // make array an empty,regardless of the result
           clickedCards = [];
        }
    }
}


//function to create an overlay message
// messageType will be "Match!" or "No Match!" sent to the function
function createOverlay(messageType){
    //comment
    
    const overlay = document.createElement("div");
    //add event listener to the overlay
    overlay.id = "overlay";
    overlay.addEventListener("click", totalExistenceFailure);
    
    //add a message to the overlay 

    const para = document.createElement("p");

    //check which typpe of overlay message to create
    //use a switch statement
    switch(messageType){
        case "No Match!":
            para.textContent = "No Match!";
            break; // stops the swtch statement from running any further
        case "Match!":
            para.textContent = "Match!";
            break;
        
    }
 
    overlay.appendChild(para);
    document.querySelector("body").appendChild(overlay);
}

function totalExistenceFailure(){
//we have to get the element's parent to remove the elememt from the DOM
this.parentNode.removeChild(this);
}


