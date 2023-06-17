var cargarTabla = (listadoNuevo)=>{
    let eSBtnAccion = document.getElementById("sBtnAccion");
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eEdad = document.getElementById("edad");
    let eEmail = document.getElementById("email");
    let eManoizquierda = document.getElementById("manoizquierda")
    let eManoderecha = document.getElementById("manoderecha")
    if (eManoizquierda.checked == true){
        var manodominante = document.getElementById("manoizquierda").value;
        console.log(manodominante)
    }
    else if (eManoderecha.checked == true){
        var manodominante= document.getElementById("manoderecha").value;
        console.log(manodominante)
    }    
    let eTelefono = document.getElementById("telefono");
    let eComentario = document.getElementById("comentario");   
    render = "<table>"
    render +="<tr><th>Nombre</th> <th>Apellido</th> <th>Edad</th> <th>Email </th> <th>Ubicacion Nombre </th> <th>Telefono</th> <th> Comentario </th> <th>Accion</th></tr>"
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        render+="<tr>"
        render+="<td>"+element.nombre+"</td>";
        render+="<td>"+element.apellido+"</td>";
        render+="<td>"+element.edad+"</td>";
        render+="<td>"+element.email+"</td>";
        render+="<td>"+element.manodominante+"</td>";
        render+="<td>"+element.telefono+"</td>";
        render+="<td>"+element.comentario+"</td>";
        render+="<td>"
        render+="<button id='btnEditar"+i+"'>Editar</button>"
        render+="<button id='btnEliminar"+i+"'>Eliminar</button>"
        render+="</td>"
        render+="</tr>"
    }
    render+="</table>"
    eContenedorTabla.innerHTML = render;
    for (let i = 0; i < listadoNuevo.length; i++) {
        const element = listadoNuevo[i];
        var eBtnEditar = document.getElementById("btnEditar"+i);
        eBtnEditar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEditar' value='"+i+"'>Modificar</button>"
            eSBtnAccion.innerHTML = sBtn

            let eBtnEditarUp = document.getElementById("btnEditar");
            console.log(eBtnEditarUp)
            eBtnEditarUp.addEventListener('click',()=>modificar(listadoNuevo)) 

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
            eComentario.value = element.comentario;
        })

        var eBtnEliminar = document.getElementById("btnEliminar"+i);
        eBtnEliminar.addEventListener("click",()=>{
            let sBtn = "<button type='button' id='btnEliminar' value='"+i+"'>Borrar</button>"
            eSBtnAccion.innerHTML = sBtn
            let eBtnEliminarUp = document.getElementById("btnEliminar");
            console.log(eBtnEliminarUp)
            eBtnEliminarUp.addEventListener('click',()=>eliminar(listadoNuevo)) 
           eNombre.value = element.nombre;
            eApellido.value = element.apellido;
            eEdad.value = element.edad;
            eEmail.value = element.email;
            const manodominante = "derecha"; 
            if (manodominante === "izquierda") {
              eManoizquierda.checked = true;
            } else if (manodominante === "derecha") {
              eManoderecha.checked = true;
            }
            eTelefono.value = element.telefono;
            eComentario = element.comentario;
        })
    }
}

var modificar = (listadoNuevo)=>{
    let eNombre = document.getElementById("nombre")
    let eApellido = document.getElementById("apellido")
    let eEdad = document.getElementById("edad")
    let eEmail = document.getElementById("email")
    let eManoizquierda = document.getElementById("manoizquierda")
    let eManoderecha = document.getElementById("manoderecha")
    if (eManoizquierda.checked == true){
        var manodominante = document.getElementById("manoizquierda").value;
        console.log(manodominante)
    }
    else if (eManoderecha.checked == true){
        var manodominante= document.getElementById("manoderecha").value;
        console.log(manodominante)
    }
    let eTelefono = document.getElementById("telefono")  
    let eComentario =document.getElementById("comentario")
    let eBtnEditarUp = document.getElementById("btnEditar");
            
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let edad = eEdad.value;
    let email = eEmail.value;
    let telefono = eTelefono.value;
    let comentario = eComentario.value;
    let indice = eBtnEditarUp.value;
    console.log(nombre);
    console.log(apellido);
    console.log(edad);
    console.log(email);
    console.log(manodominante);
    console.log(telefono);
    console.log(comentario);
    console.log(indice);
    listadoNuevo[indice].nombre = nombre;
    listadoNuevo[indice].apellido = apellido;
    listadoNuevo[indice].edad = edad;
    listadoNuevo[indice].email = email;
    listadoNuevo[indice].manodominante = manodominante;
    listadoNuevo[indice].telefono = telefono;
    listadoNuevo[indice].comentario = comentario;
    localStorage.setItem('personas',JSON.stringify(listadoNuevo))
    cargarTabla(listadoNuevo);
}
var eliminar = (listadoNuevo)=>{
    let eBtnEliminarUp = document.getElementById("btnEliminar");
    let indice = eBtnEliminarUp.value;
    let lista = listadoNuevo.filter((p)=>p.id!=indice)
    let listaFinal = lista.map((p,index)=>{return {...p,'id':index}})

    localStorage.setItem('personas',JSON.stringify(listaFinal))
    cargarTabla(listaFinal)
}


var mostrar= ()=>{
    let eNombre = document.getElementById("nombre")
    let eApellido = document.getElementById("apellido")
    let eEdad = document.getElementById("edad")
    let eEmail = document.getElementById("email")
    let eManoizquierda = document.getElementById("manoizquierda")
    let eManoderecha = document.getElementById("manoderecha")
    if (eManoizquierda.checked == true){
        var manodominante = document.getElementById("manoizquierda").value;
        console.log(manodominante)
    }
    else if (eManoderecha.checked == true){
        var manodominante= document.getElementById("manoderecha").value;
        console.log(manodominante)
    }
    let eTelefono = document.getElementById("telefono")  
    let eComentario =document.getElementById("comentario")
    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let edad = eEdad.value;
    let email = eEmail.value;
    let telefono = eTelefono.value;
    let comentario = eComentario.value;

    console.log(nombre)
    console.log(apellido)
    console.log(edad)
    console.log(email)
    console.log(telefono)
    console.log(comentario)

    let listadoAntiguoStr = localStorage.getItem("personas");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    console.log(listaAntiguo)
    if(listaAntiguo==null){
        let persona = {"id":0,"nombre" : nombre, "apellido": apellido, "edad": edad, "email": email, "manodominante": manodominante, "telefono": parseInt(telefono), "comentario":comentario}
        var listadoNuevo = [persona]
    }else{
        let persona = {"id":listaAntiguo.length,"nombre" : nombre, "apellido": apellido, "edad": edad, "email": email, "manodominante": manodominante, "telefono": parseInt(telefono), "comentario":comentario}
        var listadoNuevo = [...listaAntiguo,persona]
    }
    console.log(listadoNuevo)
    localStorage.setItem("personas",JSON.stringify(listadoNuevo));
    cargarTabla(listadoNuevo)

}
var obtenerDatos = ()=>{
    let listadoAntiguoStr = localStorage.getItem("personas");
    let listaAntiguo = JSON.parse(listadoAntiguoStr);
    cargarTabla(listaAntiguo)
}

var cambiarContraste = ()=>{
    let btn = document.getElementById("btnContraste");
    let estado = btn.value;
    if(estado=='o'){
        btn.value ='c';
        let elements = document.getElementsByClassName('oscuro');
        console.log(elements)
        console.log(elements[0])
        const tono = elements.length;
        for (let index = 0; index < tono; index++) {
            const element = elements[0];       
            element.classList.add('claro');
            element.classList.remove('oscuro');
        }
        
     }  else if(estado =='c'){
            btn.value ='o';
            let elements = document.getElementsByClassName('claro');
            console.log(elements)
            console.log(elements[0])
            const tono = elements.length;
        for (let index = 0; index < tono; index++) {
            const element = elements[0];       
            element.classList.add('oscuro');
            element.classList.remove('claro');
        }
    }
}  
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

var navbar = document.querySelector('.navbar');
var footer = document.getElementById('footer');
var header = document.getElementById('myHeader');
var btnContraste = document.getElementById('btnContraste');

btnContraste.addEventListener('click', function() {
    navbar.classList.toggle('contraste');
    footer.classList.toggle('contraste');
    header.classList.toggle('contraste');
}
);
  
document.getElementById("btn").addEventListener("click",mostrar)
addEventListener('load',obtenerDatos)
document.getElementById("btnContraste").addEventListener('click',cambiarContraste)
document.getElementById("btnFuente").addEventListener('click',cambiarFuente)

