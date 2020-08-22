// When submit button is clicked, alert the user
$("#submit-button").on("click", function (e) {
    e.preventDefault();
    //console.log("click"); 
    alert("Thank you for submitting your contact info")

})
// Variables for cat facts
var factPlaceholder = document.getElementById("cat-fact");
var showFact = document.getElementById("show-fact");

//Facts from this website: https://www.purina.co.uk/cats/behaviour-and-training/understanding-cat-behaviour/fun-facts-about-cats// 

// Create a list of random cat facts in an array

var CatFacts = ["The oldest cat in the world was 38 years old!",
    "Cats share 95.6% of their DNA with tigers.",
    "Cats are asleep for 70% of their lives.",
    "A house cat can reach speeds of up to 30mph",
    "In 1963 a cat went to space."
]

var factNumber;

// Create a function to return the cat facts
function randomFact() {
    return CatFacts[factNumber];
}
// When show fact is clicked populate page with random cat facts
showFact.addEventListener('click', function () {
    factNumber = Math.floor(Math.random() * 5);
    factPlaceholder.textContent = randomFact();
});