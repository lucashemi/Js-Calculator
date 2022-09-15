// Teclas

let resultado = document.querySelector('.resultado')
const c = document.querySelector('.botao-c')
const X = document.querySelector('.botao-X')
const ponto = document.querySelector('.botao-ponto')
const num = document.querySelectorAll('.num')
const op = document.querySelectorAll('.sp')

// Resposta

let resposta = '';


//Numeros para a resposta

num[0].addEventListener('click', () => {
    resposta += '0';
    resultado.textContent = resposta;
})

num[1].addEventListener('click', () => {
    resposta += '1';
    resultado.textContent = resposta;
})

num[2].addEventListener('click', () => {
    resposta += '2';
    resultado.textContent = resposta;
})

num[3].addEventListener('click', () => {
    resposta += '3';
    resultado.textContent = resposta;
})

num[4].addEventListener('click', () => {
    resposta += '4';
    resultado.textContent = resposta;
})

num[5].addEventListener('click', () => {
    resposta += '5';
    resultado.textContent = resposta;
})

num[6].addEventListener('click', () => {
    resposta += '6';
    resultado.textContent = resposta;
})

num[7].addEventListener('click', () => {
    resposta += '7';
    resultado.textContent = resposta;
})

num[8].addEventListener('click', () => {
    resposta += '8';
    resultado.textContent = resposta;
})

num[9].addEventListener('click', () => {
    resposta += '9';
    resultado.textContent = resposta;
})

// Operacoes

op[0].addEventListener('click', () => {
    resposta += '/';
    resultado.textContent = resposta;
})

op[1].addEventListener('click', () => {
    resposta += '*';
    resultado.textContent = resposta;
})

op[2].addEventListener('click', () => {
    resposta += '-';
    resultado.textContent = resposta;
})

op[3].addEventListener('click', () => {
    resposta += '+';
    resultado.textContent = resposta;
})

op[4].addEventListener('click', () => {
    resposta = eval(resposta);
    resultado.textContent = resposta;
})

ponto.addEventListener('click', () => {
    resposta += '.';
    resultado.textContent = resposta;
})

c.addEventListener('click', () => {
    resposta = '';
    resultado.textContent = resposta;
})

X.addEventListener('click', () => {
    resposta = resposta.slice(0, -1);
    resultado.textContent = resposta;
})
