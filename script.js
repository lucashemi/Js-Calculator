let results = document.querySelector('.results')
let answer = '';
let answered = false;

const c = document.querySelector('.button-c')
const X = document.querySelector('.button-X')
const dot = document.querySelector('.button-dot')
const num = document.querySelectorAll('.num')
const op = document.querySelectorAll('.sp')

// Numbers

num[0].addEventListener('click', () => {
    answer += '0';
    results.textContent = answer;
})

num[1].addEventListener('click', () => {
    answer += '1';
    results.textContent = answer;
})

num[2].addEventListener('click', () => {
    answer += '2';
    results.textContent = answer;
})

num[3].addEventListener('click', () => {
    answer += '3';
    results.textContent = answer;
})

num[4].addEventListener('click', () => {
    answer += '4';
    results.textContent = answer;
})

num[5].addEventListener('click', () => {
    answer += '5';
    results.textContent = answer;
})

num[6].addEventListener('click', () => {
    answer += '6';
    results.textContent = answer;
})

num[7].addEventListener('click', () => {
    answer += '7';
    results.textContent = answer;
})

num[8].addEventListener('click', () => {
    answer += '8';
    results.textContent = answer;
})

num[9].addEventListener('click', () => {
    answer += '9';
    results.textContent = answer;
})

// Operations

op[0].addEventListener('click', () => {
    answer += '/';
    results.textContent = answer;
})

op[1].addEventListener('click', () => {
    answer += '*';
    results.textContent = answer;
})

op[2].addEventListener('click', () => {
    answer += '-';
    results.textContent = answer;
})

op[3].addEventListener('click', () => {
    answer += '+';
    results.textContent = answer;
})

// Equals (=)

op[4].addEventListener('click', () => {
    answered = true;
    answer = eval(answer);
    results.textContent = answer;
})

// Dot (.)

dot.addEventListener('click', () => {
    answer += '.';
    results.textContent = answer;
})

// Clear (C)

c.addEventListener('click', () => {
    answer = '';
    results.textContent = answer;
})

// Remove (X)

X.addEventListener('click', () => {
	if (answered == true) {
    	answer = '';
    	results.textContent = answer;
    	answered = false;
    	return;
    }
    answer = answer.slice(0, -1);
    results.textContent = answer;
})
