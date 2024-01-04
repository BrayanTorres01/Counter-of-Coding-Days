// getting an element by its id and modifying it
// document.getElementById("count-el").innerText = 5
// Working with the DOM aka how you use JS to modify websites 

// JS letting us modify html
let countEl = document.getElementById("count-el")
let countRestart = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

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

// allows us to restart the count of days when the buttton is clicked
function restart() {
    count = 0
    countRestart.innerText = count;
}

// allows us to save our streak fo days
function save() {
        saveEl.innerText += " " + count + " - ";
   

    // We can also do it this way
    // let countStr = count + " - "
    // saveEl.textContent += countStr

    // I can also make it count from zero if the save button is pressed
    // count = 0;
    // countEl.innerText = count;
}

