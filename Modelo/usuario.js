class Usuario {
    // Constructor para inicializar un objeto Usuario
    constructor(id, nombre, cuenta, clave, email, rol) {
        this.id = id;
        this.nombre = nombre;
        this.cuenta = cuenta;
        this.contraseña = clave;
        this.correo = email;
        this.rol = rol;
    }

    // Método para obtener los detalles de un usuario
    getUsuario() {
        return `ID: ${this.id}\nNombre: ${this.nombre}\nCuenta: ${this.cuenta}\nEmail: ${this.email}\nRol: ${this.rol}`;
    }

    // Método para verificar si la clave proporcionada coincide con la clave del usuario
    verificarClave(clave) {
        return this.clave === clave;
    }

    // Método para obtener la última fecha de acceso del usuario
    ultimoAcceso() {
        return `Último acceso: ${this.estampa}`;
    }
}

