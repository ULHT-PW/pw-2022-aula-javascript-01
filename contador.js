let contador = 0;

function contar() {
    contador++;
    const heading = document.querySelector('#contador');
    heading.innerHTML = `O contador vai em ${contador}`;
}


document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('button').onclick = contar;

});
