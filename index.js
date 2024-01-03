// getting an element by its id and modifying it
// document.getElementById("count-el").innerText = 5
// Working with the DOM aka how you use JS to modify websites 

// JS letting us modify html
let countEl = document.getElementById("count-el")
let countRestart = document.getElementById("count-el")

// let or var allows you to form variables
// intialize the count as 0
let count = 0

// using the increment function that I initialized in my html as an attr
// listen for clicks on the increment button
function increment() {
    // increment the count variable when the button is clicked
    count++
    // modifying it 
    countEl.innerText = count;
}

function restart() {
    count = 0
    countRestart.innerText = count;
}

function save() {

}

