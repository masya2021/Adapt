//поиск элементов для обращения!!!

// document.getElementById('burger');
// document.getElementsByClassName('className');
// document.getElementsByTagName('br');
// document.querySelector('.menu');   - до первого совпадения элемента
// document.querySelectorAll('i');    --  ищет все совпадения элементов

var burg = document.getElementById('menu');

burg.onclick = function () {
    addMenu();
};

function addMenu() {
    console.log('click')
    document.querySelector('.mob-menu').classList.toggle('show');
}