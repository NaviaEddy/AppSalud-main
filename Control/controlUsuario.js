class ControlUsuario {
    constructor() {
        this.usuarios = [];
    }

    agregarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    eliminar(nombre) {
        let id = -1;
        this.usuarios.forEach((user, index) => {
            if (user.nombre === nombre) {
                id = index;
            }
        });

        if (id !== -1) {
            this.usuarios.splice(id, 1);
        }
    }

    editarUsuario(id, nuevoUsuario) {
        const usuarioIndex = this.usuarios.findIndex((user) => user.id === id);

        if (usuarioIndex != -1) {
            this.usuarios[usuarioIndex] = nuevoUsuario;
        }
    }

    mostrarUsuarios(aux) {
        let html = "";
        const listaUsuarios = document.getElementById("lista-usuarios");
        listaUsuarios.innerHTML = "";
        controlUsuarios.usuarios.forEach((usuario) => {
            const fila = listaUsuarios.insertRow();
            const celdaperfil = fila.insertCell(0);
            const celdaid = fila.insertCell(1);
            const celdaNombre = fila.insertCell(2);
            const celdacuenta = fila.insertCell(3);
            const celdaContraseña = fila.insertCell(4);
            const celdaCorreo = fila.insertCell(5);
            const celdarol = fila.insertCell(6);

            celdaperfil.innerHTML = '<img src="/componentes/perfil_doc.png" width="60px" alt="" >  '
            celdaid.innerHTML = usuario.id;
            celdaNombre.innerHTML = usuario.nombre;
            celdacuenta.innerHTML = usuario.cuenta;
            celdaContraseña.innerHTML = usuario.contraseña;
            celdaCorreo.textContent = usuario.correo;
            celdarol.innerHTML = usuario.rol;

            if (aux) {
                const botonContainer = document.createElement("div");
                botonContainer.className = "button-container";

                const botonEliminar = document.createElement("button");
                botonEliminar.textContent = "Eliminar";
                botonEliminar.className = "eliminar-button";
                botonEliminar.addEventListener("click", () => eliminarUsuario(usuario.nombre));
                botonContainer.appendChild(botonEliminar);

                const botonEditar = document.createElement("button");
                botonEditar.textContent = "Editar";
                botonEditar.className = "editar-button";
                botonEditar.addEventListener("click", () => editarUsuario(usuario.id));
                botonContainer.appendChild(botonEditar);

                const celdaBotones = fila.insertCell(7);
                celdaBotones.appendChild(botonContainer);

            }

        });

    }


}



function editarUsuario(id) {
    const usuarioAEditar = controlUsuarios.usuarios.find((usuario) => usuario.id === id);
    document.getElementById("editarUser").style.display = "block";
    if (usuarioAEditar) {
        let html = `
      <form> 
        <label for="nuevoid"> Nuevo id:</label>
        <input type="text" id="nuevoid" name="nuevoid" value="${usuarioAEditar.id}"/>
        <label for="nuevoNombre">Nuevo Nombre:</label>
        <input type="text" id="nuevoNombre" name="nuevoNombre" value="${usuarioAEditar.nombre}" />
        <label for="nuevocuenta">Nuevo cuenta:</label>
        <input type="text" id="nuevocuenta" name="nuevocuenta" value="${usuarioAEditar.cuenta}" />
        <label for="nuevaContraseña">Nueva Contraseña:</label>
        <input type="text" id="nuevaContraseña" name="nuevaContraseña" value="${usuarioAEditar.contraseña}" />
        <label for="nuevoCorreo">Nuevo Correo:</label>
        <input type="email" id="nuevoCorreo" name="nuevoCorreo" value="${usuarioAEditar.correo}" />
        <label for="nuevorol">Nuevo rol:</label>
        <input type="rol" id="nuevorol" name="nuevorol" value="${usuarioAEditar.rol}" />

        <input type="button" value="Guardar" class="edit-button" onclick="guardarEdicion('${id}');" />
      </form>`;
        document.getElementById("editarUser").innerHTML = html;
    }

}

function guardarEdicion(id) {
    const nuevoid = document.getElementById("nuevoid").value;
    const nuevoNombre = document.getElementById("nuevoNombre").value;
    const nuevocuenta = document.getElementById("nuevocuenta").value;
    const nuevaContraseña = document.getElementById("nuevaContraseña").value;
    const nuevoCorreo = document.getElementById("nuevoCorreo").value;
    const nuevoRol = document.getElementById("nuevorol").value;
    const nuevoUsuario = new Usuario(nuevoid, nuevoNombre, nuevocuenta, nuevaContraseña, nuevoCorreo, nuevoRol);
    controlUsuarios.editarUsuario(id, nuevoUsuario);
    document.getElementById("editarUser").innerHTML = "";
    controlUsuarios.mostrarUsuarios(true);
}

function eliminarUsuario(nombre) {
    controlUsuarios.eliminar(nombre);
    controlUsuarios.mostrarUsuarios(true);
}

const usuario1 = new Usuario("1", "Ramiro", "rduran", "abc", "rduran@gmail.com", "admin");
const usuario2 = new Usuario("2", "Alberto", "aduran", "1234", "aquirogan@gmail.com", "medico");
const usuario3 = new Usuario("3", "María", "mleascno", "0123", "marian@gmail.com ", "operador");
const usuario4 = new Usuario("4", "Juan", "aldayus", "12563", "juan@gmail.com", "admin");
const usuario5 = new Usuario("5", "Arminda", "arminda", "123223", "arminda@gmail.com", "medico");

const controlUsuarios = new ControlUsuario();
controlUsuarios.agregarUsuario(usuario1);
controlUsuarios.agregarUsuario(usuario2);
controlUsuarios.agregarUsuario(usuario3);
controlUsuarios.agregarUsuario(usuario4);
controlUsuarios.agregarUsuario(usuario5);
