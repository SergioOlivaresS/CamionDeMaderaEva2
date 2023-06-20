// esta variable carga una tabla en la pagina web y muestra los datos ingresados
var cargarTabla = (listadoNuevo) => {
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEdad = document.getElementById("edad");
    let eEmail = document.getElementById("email");
    let eManoizquierda = document.getElementById("manoizquierda")
    let eManoderecha = document.getElementById("manoderecha")
    // marca una u otra opcion
    if (eManoizquierda.checked == true) {
        var manodominante = document.getElementById("manoizquierda").value;
    }
    else if (eManoderecha.checked == true) {
        var manodominante = document.getElementById("manoderecha").value;
    }
    let eTelefono = document.getElementById("telefono");
    let eEntrega = document.getElementById("entrega");
    let eHora = document.getElementById("hora");
    let eComentario = document.getElementById("comentario");
    render = "<table>";
    render += "<tr><th>Nombre</th><th>Apellido</th><th>Edad</th><th>Email</th><th>Ubicacion Nombre</th><th>Telefono</th><th>Fecha Entrega</th><th>Hora Entrega</th><th>Comentario</th><th>Accion</th></tr>";
    // este for recorre los elementos de listadoNuevo y genera una tabla HTML en cada iteración
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render += "<tr>";
        render += "<td style='text-align: center;'>" + element.nombre + "</td>";
        render += "<td style='text-align: center;'>" + element.apellido + "</td>";
        render += "<td style='text-align: center;'>" + element.edad + "</td>";
        render += "<td style='text-align: center;'>" + element.email + "</td>";
        render += "<td style='text-align: center;'>" + element.manodominante + "</td>";
        render += "<td style='text-align: center;'>" + element.telefono + "</td>";
        render += "<td style='text-align: center;'>" + element.entrega + "</td>";
        render += "<td style='text-align: center;'>" + element.hora + "</td>";
        render += "<td style='text-align: center;'>" + element.comentario + "</td>";
        render += "<td style='text-align: center;'>";
        render += "<button id='btnEditar" + i + "'>Editar</button>";
        render += "<button id='btnEliminar" + i + "'>Eliminar</button>";
        render += "</td>";
        render += "</tr>";
        render += "<tr style='height: 1px;'><td colspan='10'></td></tr>";
    }
    render += "</table>";
    eContenedorTabla.innerHTML = render;
    // este for recorre la lista y  permite edita los valores.
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        var eBtnEditar = document.getElementById("btnEditar" + i);
        eBtnEditar.addEventListener("click", (cargarTabla) => {
            let sBtn = "<button type='button' id='btnEditar' value='" + i + "'>Modificar</button>"
            eSBtnAccion.innerHTML = sBtn
            let eBtnEditarUp = document.getElementById("btnEditar");
            console.log(eBtnEditarUp)
            eBtnEditarUp.addEventListener('click', () => modificar(listadoNuevo))
            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
            eEdad.value = element.edad;
            eEmail.value = element.email;
            const manodominante = element.manodominante;
            if (manodominante == "izquierda") {
                eManoizquierda.checked = true;
            } else if (manodominante == "derecha") {
                eManoderecha.checked = true;
            }
            eTelefono.value = element.telefono;
            eEntrega.value = element.entrega;
            eHora.value = element.hora;
            eComentario.value = element.comentario;
        })
        // esta variable permite eliminar los datos de la tabla por medio de un boton
        var eBtnEliminar = document.getElementById("btnEliminar" + i);
        var eBtnEliminar = document.getElementById("btnEliminar" + i);
        eBtnEliminar.addEventListener("click", () => {
            let sBtn = "<button type='button' id='btnEliminar' value='" + i + "'>Borrar</button>"
            eSBtnAccion.innerHTML = sBtn;
            let eBtnEliminarUp = document.getElementById("btnEliminar");
            console.log(eBtnEliminarUp);
            eBtnEliminarUp.addEventListener('click', () => eliminar(listadoNuevo));
            eNombre.value = element.nombre;
            eNombre.readOnly = true;  // Deshabilita la edición de text
            eApellido.value = element.apellido;
            eApellido.readOnly = true;  // Deshabilita la edición de text
            eEdad.value = element.edad;
            eEdad.readOnly = true; // Deshabilita la edición de number
            eEmail.value = element.email;
            eEmail.readOnly = true; // Deshabilita la edición de email
            const manodominante = "derecha";
            if (manodominante === "izquierda") {
                eManoizquierda.checked = true;
                eManoizquierda.readOnly = true; // Deshabilita la edición de radio
            } else if (manodominante === "derecha") {
                eManoderecha.checked = true;
                eManoderecha.readOnly = true; // Deshabilita la edición de radio
            }
            eTelefono.value = element.telefono;
            eTelefono.readOnly = true // Deshabilita la edición de tel
            eEntrega.value = element.entrega;
            eEntrega.readOnly = true; // Deshabilita la edición del campo date
            eHora.value = element.hora;
            eHora.readOnly = true; // Deshabilita la edición del campo time
            eComentario.value = element.comentario;
            eComentario.readOnly = true; // Deshabilita la edición del campo textarea
        });
    }
}
// esta variable permite modificar los datos de una tabla atraves de un boton
var modificar = (listadoNuevo) => {
    let eNombre = document.getElementById("nombre")
    let eApellido = document.getElementById("apellido")
    let eEdad = document.getElementById("edad")
    let eEmail = document.getElementById("email")
    let eManoizquierda = document.getElementById("manoizquierda")
    let eManoderecha = document.getElementById("manoderecha")
    if (eManoizquierda.checked == true) {
        var manodominante = document.getElementById("manoizquierda").value;
    }
    else if (eManoderecha.checked == true) {
        var manodominante = document.getElementById("manoderecha").value;
    }
    let eTelefono = document.getElementById("telefono")
    let eEntrega = document.getElementById("entrega")
    let eHora = document.getElementById("hora")
    let eComentario = document.getElementById("comentario")
    let eBtnEditarUp = document.getElementById("btnEditar");

    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let edad = eEdad.value;
    let email = eEmail.value;
    let telefono = eTelefono.value;
    let entrega = eEntrega.value;
    let hora = eHora.value;
    let comentario = eComentario.value;
    let indice = eBtnEditarUp.value;

    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].apellido = apellido;
    listadoNuevo[indice].edad = edad;
    listadoNuevo[indice].email = email;
    listadoNuevo[indice].manodominante = manodominante;
    listadoNuevo[indice].telefono = telefono;
    listadoNuevo[indice].entrega = entrega;
    listadoNuevo[indice].hora = hora;
    listadoNuevo[indice].comentario = comentario;
    localStorage.setItem('personas', JSON.stringify(listadoNuevo))
    cargarTabla(listadoNuevo);
}
// esta variable se usa para eliminar, crea la listaFinal a partir de lista y asigna nuevos valores al campo id
var eliminar = (listadoNuevo) => {
    let eBtnEliminarUp = document.getElementById("btnEliminar");
    let indice = eBtnEliminarUp.value;
    let lista = listadoNuevo.filter((p) => p.id != indice)
    let listaFinal = lista.map((p, index) => { return { ...p, 'id': index } })
    localStorage.setItem('personas', JSON.stringify(listaFinal))
    cargarTabla(listaFinal)
}

// esta variable es la encargada de registrar los datos.
var mostrar = () => {
    let eNombre = document.getElementById("nombre")
    let eApellido = document.getElementById("apellido")
    let eEdad = document.getElementById("edad")
    let eEmail = document.getElementById("email")
    let eManoizquierda = document.getElementById("manoizquierda")
    let eManoderecha = document.getElementById("manoderecha")
    if (eManoizquierda.checked == true) {
        var manodominante = document.getElementById("manoizquierda").value;
        console.log(manodominante)
    }
    else if (eManoderecha.checked == true) {
        var manodominante = document.getElementById("manoderecha").value;
        console.log(manodominante)
    }
    let eTelefono = document.getElementById("telefono")
    let eEntrega = document.getElementById("entrega")
    let eHora = document.getElementById("hora")
    let eComentario = document.getElementById("comentario")

    let nombre = eNombre.value;
    // validacion para que no sea nulo

    if (nombre.trim() === "") {
        alert("El nombre es un campo obligatorio.");
        return;
    }

    let apellido = eApellido.value;
    // validacion para que no sea nulo
    if (apellido.trim() === "") {
        alert("El apellido es un campo obligatorio.");
        return;
    }
    let edad = eEdad.value;
    // valida que el campo edad solo se puedan agregar numeros positivo
    if (edad === "" || parseInt(edad) <= 0) {
        alert("La edad debe ser un número positivo.");
        return;
    }
    let email = eEmail.value;
    if (!email) {
        alert("El campo de entrega es obligatorio.");
        return;
    }
    // valida que el email tenga un @ como obligatorio
    if (email !== "" && !email.includes("@")) {
        alert("El email debe contener al menos un símbolo '@'.");
        return;
    }
    let telefono = eTelefono.value;
    if (!telefono) {
        alert("El campo de entrega es obligatorio.");
        return;
    }
    // valida que el campo telefono solo pueda contener numeros
    if (telefono !== "" && !(/^\d+$/.test(telefono))) {
        alert("El teléfono solo puede contener números.");
        return;
    }
    let entrega = eEntrega.value;
    // valida que el campo sea obligatorio
    if (!entrega) {
        alert("El campo de entrega es obligatorio.");
        return;
    }
    // valida que la fecha de entrega no sea anterior al día de hoy
    let fechaHoy = new Date();
    fechaHoy.setHours(0, 0, 0, 0);
    let fechaEntrega = new Date(eEntrega.value);
    if (fechaEntrega < fechaHoy) {
        alert("La fecha de entrega no puede ser dias en el pasado.");
        return;
    }

    let hora = eHora.value;
    // valida que el campo sea obligatorio
    if (!hora) {
        alert("El campo de hora es obligatorio.");
        return;
    }
    // es un campo opcional no requiere validaciones
    let comentario = eComentario.value;

    let listadoAntiguoStr = localStorage.getItem("personas");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)
    if (listaAntiguo == null) {
        let persona = { "id": 0, "nombre": nombre, "apellido": apellido, "edad": edad, "email": email, "manodominante": manodominante, "telefono": parseInt(telefono), "entrega": entrega, "hora": hora, "comentario": comentario }
        var listadoNuevo = [persona]
    } else {
        let persona = { "id": listaAntiguo.length, "nombre": nombre, "apellido": apellido, "edad": edad, "email": email, "manodominante": manodominante, "telefono": parseInt(telefono), "entrega": entrega, "hora": hora, "comentario": comentario }
        var listadoNuevo = [...listaAntiguo, persona]
    }
    console.log(listadoNuevo)
    localStorage.setItem("personas", JSON.stringify(listadoNuevo));
    cargarTabla(listadoNuevo)

}
// esta variable recupera los datos del localstorage y y los carga en la tabla
var obtenerDatos = () => {
    let listadoAntiguoStr = localStorage.getItem("personas");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    cargarTabla(listaAntiguo)
}

// esta cambiable permite cambio el color de la pagina web
var cambiarContraste = () => {
    let btn = document.getElementById("btnContraste");
    let estado = btn.value;
    if (estado == 'o') {
        btn.value = 'c';
        let elements = document.getElementsByClassName('oscuro');
        while (elements.length > 0) {
            const element = elements[0];
            element.classList.add('claro');
            element.classList.remove('oscuro');
        }
    } else if (estado == 'c') {
        btn.value = 'o';
        let elements = document.getElementsByClassName('claro');
        while (elements.length > 0) {
            const element = elements[0];
            element.classList.add('oscuro');
            element.classList.remove('claro');
        }
    }
}

// esta variable permite cambio el tamaño de la fuente de la pagina
var cambiarFuente = () => {
    let btn = document.getElementById("btnFuente");
    let estado = btn.value;
    if (estado == "0") {
        btn.value = '1';
        let elements = document.getElementsByClassName("small");
        const largo = elements.length;
        for (let index = 0; index < largo; index++) {
            const element = elements[0];
            element.classList.add("medium");
            element.classList.remove("small");
        }
    } else if (estado == "1") {
        btn.value = "2";
        let elements = document.getElementsByClassName("medium");
        const largo = elements.length;
        for (let index = 0; index < largo; index++) {
            const element = elements[0];
            element.classList.add("large");
            element.classList.remove("medium");
        }
    } else if (estado == "2") {
        btn.value = "0";
        let elements = document.getElementsByClassName("large");
        const largo = elements.length;
        for (let index = 0; index < largo; index++) {
            const element = elements[0];
            element.classList.add("small");
            element.classList.remove("large");
        }
    }
}

// estas variables se agregaron para que el cambio de color tambien aplique a los footer navbar y header
var navbar = document.querySelector('.navbar');
var footer = document.getElementById('footer');
var header = document.getElementById('myHeader');
var btnContraste = document.getElementById('btnContraste');

btnContraste.addEventListener('click', function () {
    navbar.classList.toggle('contraste');
    footer.classList.toggle('contraste');
    header.classList.toggle('contraste');
}
);

document.getElementById("btn").addEventListener("click", mostrar)
addEventListener('load', obtenerDatos)
document.getElementById("btnContraste").addEventListener('click', cambiarContraste)
document.getElementById("btnFuente").addEventListener('click', cambiarFuente)

