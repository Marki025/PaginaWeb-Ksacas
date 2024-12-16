function verificarCamposCompletos() {
    let form = document.getElementById('contactForm');
    let inputs = form.querySelectorAll('input, textarea');
    let todosCompletos = true;

    for (let input of inputs) {
        if (input.value.trim() === '') {
            todosCompletos = false;
            console.log(`El campo ${input.name} está vacío.`);
        }
    }

    if (todosCompletos) {
        console.log('Todos los campos están completos.');
    } else {
        console.log('Hay campos vacíos en el formulario.');
    }

    return todosCompletos;
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    if (!verificarCamposCompletos()) {
         event.preventDefault(); //no se envia el form
    }
});
