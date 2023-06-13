let btn = document.getElementById('button');
let toDoContainer = document.getElementById('toDoContainer');
let input = document.getElementById('input');

btn.addEventListener('click', function() {
 var text = document.createElement('p');
 text.classList.add('text-styling');
 text.innerText = input.value;
 toDoContainer.appendChild(text);
 input.value = '';

 text.addEventListener('dblclick', function(){
    toDoContainer.removeChild(text)
 })

 text.addEventListener('click', function(){
    text.style.color = 'lime';
 })
})