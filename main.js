var forma = document.querySelector('.forma');
var mygtukas = document.querySelector('.mygtukas')
var kurti = document.querySelector('.kurti');

mygtukas.addEventListener('click', function(e){
    var plotis = document.querySelector('.plotis').value;
    var aukstis = document.querySelector('.aukstis').value;
    var splava = document.querySelector('.spalva').value;
    console.log(splava);
    var blokelis = document.createElement('div');
    blokelis.classList.add('elementas');
    blokelis.style.backgroundColor = splava;
    blokelis.style.width = plotis + 'px';
    blokelis.style.height = aukstis + 'px';
    kurti.appendChild(blokelis);
});
kurti.addEventListener('click', function(e){
    e.target.classList.toggle('paslepti');
})

