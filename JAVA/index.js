let form = document.getElementById("form");

form.addEventListener("submit", e => {

    e.preventDefault();


    /*-------------VERIFICACION DE DATOS-------------------------------- */


    const nombre = document.getElementById("name");
    const apellido = document.getElementById("surname");
    const email = document.getElementById("email");

    if(nombre.value.trim() == ""|| apellido.value.trim() == "" || email.value.trim() == ""){

        alert("Complete todos los datos");

    } else if(!isValidEmail(email.value)) {

        alert("Ingrese un correo electronico válido");

    } else {

        form.submit();
     /*---------------CALCULO DE LOS TICKETS-------------------------- */
    let cantidad = document.getElementById("cant").value;
    let descuento = document.getElementById("categoria").value;

    const valor = 200; //valor del ticket

    var ticket_normal = cantidad * valor;
    var ticket_descuento = ticket_normal - (ticket_normal * descuento);

    var total =  document.getElementById("precio");
    total.innerHTML = ticket_descuento;

    }

})


function isValidEmail (email){

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);


}


