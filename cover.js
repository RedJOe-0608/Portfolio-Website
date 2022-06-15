//Cover CSS
const text = "Hello, My name is Jyothi Swaroop."
let index = 0;
let letter = '';


(function type(){
    letter = text.slice(0, ++index);
        document.querySelector('.show').textContent = letter;
    if(letter.length === text.length)
    {
        return;
    }
    setTimeout(type ,270)
}())
