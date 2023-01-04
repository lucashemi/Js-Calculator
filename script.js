let results = document.querySelector('.results')

const nod = document.querySelectorAll('[data-value]')
const C = document.querySelector('.button-C')
const X = document.querySelector('.button-X')
const eq = document.querySelector('.button-eq')

// NOD (Numbers, Operations and Dot)
nod.forEach( (element) => {
    element.addEventListener('click', (event) => {
        results.textContent += event.target.dataset.value;
    })
})

// Clear (C)
C.addEventListener('click', () => {
    results.textContent = '';
})

// Remove (X)
X.addEventListener('click', () => {
    results.textContent = results.textContent.toString().slice(0, -1);
})

// Equals (=)
eq.addEventListener('click', () => {
    results.textContent = eval(results.textContent);
})