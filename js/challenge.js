// Make sure the timer works
const counter = document.getElementById('counter');
const buttonGroup = document.querySelector("#button-group");
// const plusButton = document.getElementById('plus');
// const minusButton = document.getElementById('minus');
// const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');
const likesUl = document.querySelector('.likes');
const commentsDiv = document.getElementById('list')

// Make sure the pause button works properly 
let paused = false;

setInterval( () => {
    if (!paused) incrementCounter();
}, 1000);

let count = parseInt(counter.innerText);
let likedNumbers = {};

function incrementCounter() {
    count++;
    counter.innerText = count;    
}

function decrementCounter() {
    count--;
    counter.innerText = count;
}

buttonGroup.addEventListener("click", event => {
    if (event.target.id === "plus") {
        incrementCounter();
    } else if (event.target.id === "minus") {
        decrementCounter();
    } else if (event.target.id === "heart") {
        updateLikes();
    } else if (event.target.id === "pause") {
        togglePause();
    }
})

function updateLikes() {
    if (likedNumbers[count]) {
        likedNumbers[count] += 1;

        const li = document.querySelector(`[data-number='${count}']`);
        li.innerText = `${count} has been liked ${likedNumbers[count]} time`;
    } else {
        likedNumbers[count] = 1;

        const li = document.createElement("li");
        li.dataset.number = count;
        li.innerText = `${count} has been liked 1 time`
        likesUl.append(li);
    }
}

function togglePause() {
    paused = !paused;
    const allBtns = document.querySelectorAll("button");

    allBtns.forEach(btn => {
        if (btn.id !== "pause") {
            btn.disabled = paused;
        }
    })

    if (paused) {
        pauseButton.innerHTML = "resume";
    } else {
        pauseButton.innerHTML = "pause"
    }
}

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    let commentDiv = document.createElement('div');
    let comment = document.querySelector('#comment-input').value;
    document.querySelector('#comment-input').value = '';
    commentDiv.innerText = comment; 
    commentsDiv.append(commentDiv);
})