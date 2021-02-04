// Make sure the timer works
const counter = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const heartButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const submitButton = document.getElementById('submit');
const likesUl = document.getElementsByClassName('likes');
const commentsDiv = document.getElementById('list')

let timer = setInterval(incrementCounter, 1000);
let count = parseInt(counter.innerText);

function incrementCounter() {
    count++;
    counter.innerHTML = count;    
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
}

plusButton.addEventListener('click', incrementCounter);
minusButton.addEventListener('click', decrementCounter);

// Make sure the pause button works properly 
let isTimmerRunning = true;

pauseButton.addEventListener('click', () => {
    if (isTimmerRunning === true) {
        clearInterval(timer);
        pauseButton.innerText = 'resume';
        minusButton.disabled = true;
        plusButton.disabled = true;
        heartButton.disabled = true;
        submitButton.disabled = true;
        isTimerRunning = false;
    } else { 
        timer = setTimeout(incrementCounter, 1000);
        pauseButton.innerText = 'pause';
        minusButton.disabled = false;
        plusButton.disabled = false;
        heartButton.disabled = false;  
        submitButton.disabled = false;  
        isTimerRunning = true;
    }
})

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    let commentDiv = document.createElement('div');
    let comment = document.querySelector('#comment-input').value;
    document.querySelector('#comment-input').value = '';
    commentDiv.innerText = comment; 
    commentsDiv.append(commentDiv);
})