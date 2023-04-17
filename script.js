let textConteiner = document.querySelector('.text-conteiner');
let deleteBtn = document.querySelector('.btn-backspace');
let enterBtn = document.querySelector('.btn-enter');
let capslockBtn = document.querySelector('.btn-capslock');
let spaceBtn = document.querySelector('.btn-space');
let allButton = document.querySelectorAll('button');


deleteBtn.addEventListener('click', function() {
    let textContainerContent = textConteiner.innerText;
    if (textContainerContent.length == 0) {
        return;
    }
    console.log(textContainerContent);
    let newContent = textContainerContent.slice(0, textContainerContent.length - 1);
    textConteiner.innerText = newContent;
});

enterBtn.addEventListener('click', function() {
    let content = textConteiner.innerText;
    let newContent = content + "\n";
    textConteiner.innerText = newContent;
});

capslockBtn.addEventListener('click', function() {
    textConteiner.classList.toggle('uppercase'); 
});

spaceBtn.addEventListener('click', function() {
    let content = textConteiner.innerText;
    let newContent = content + '\u00A0';
    textConteiner.innerText = newContent;
});

for(let button of allButton) {
    button.addEventListener('click',function(){
        if (button.classList.contains('btn-backspace') || button.classList.contains('btn-enter')||
         button.classList.contains('btn-space') || button.classList.contains('btn-capslock')) {
            return;
        }
        textConteiner.innerText += button.innerText;
    });
};