 // Aquí tu código

 const agregar = document.getElementById('agregar');
 const lista = document.getElementById('lista');

 agregar.addEventListener('click', function () {

    const newitem = prompt('Introduce');

    if (newitem) {

        const listitem = document.createElement('li');
        listitem.textContent = newitem;

        lista.appendChild(listitem);
    }else {
        alert('No se ha ingresado ningún elemento.');
    }
 });