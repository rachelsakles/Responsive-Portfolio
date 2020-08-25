// When submit button is clicked, alert the user
$("#submit-button").on("click", function (e) {
    e.preventDefault();
    //console.log("click"); 
    alert("Thank you for submitting your contact info")

})
// Variables for Rachel facts
var factPlaceholder = document.getElementById("Rachel-fact");
var showFact = document.getElementById("show-fact");

//Facts from this website: https://www.purina.co.uk/cats/behaviour-and-training/understanding-cat-behaviour/fun-facts-about-cats// 

// Create a list of random cat facts in an array

var RachelFacts = ["I am the oldest of three sisters",
    "I have two cats, and a mini shetland sheepdog.",
    "My pets names are Calypso, Pandora, and Leonidas.",
    "I have been working out consistently since I was 14 years old.",
    "I wish I found out how interested I am in coding sooner.", 
    "My grandma is from Athens."
]

var factNumber;

// Create a function to return the cat facts
function randomFact() {
    return RachelFacts[factNumber];
}
// When show fact is clicked populate page with random cat facts
showFact.addEventListener('click', function () {
    factNumber = Math.floor(Math.random() * 6);
    factPlaceholder.textContent = randomFact();
});