export class Usuario {
    _id?: String;
    nombres: string;
    apellidos: string;
    correo: string;
    password: string;
    contacto: number;

    constructor(nombres: string, apellidos: string, correo: string, password: string, contacto: number) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.correo = correo
        this.password = password
        this.contacto = contacto
    }
}
