import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  datos:any;

  private currentUserSubject: BehaviorSubject<Cliente>;
  public currentUser: Observable<Cliente>;

  url = 'https://rentech-cl.herokuapp.com/'; // disponer de el url de su servidor que tiene los archivos PHP

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Cliente>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Cliente {
    return this.currentUserSubject.value;
  }

  login(login) {
    return this.http.post(`${this.url}login.php`, JSON.stringify(login));
  }
  loginTecnico(login) {
    return this.http.post(`${this.url}login_tecnico.php`, JSON.stringify(login));
  }
  register(register) {
    return this.http.post(`${this.url}registro_cliente.php`, JSON.stringify(register));
  }
  registerTecnico(register) {
    //console.log("a baix");
    //console.log(register);
    //console.log("amunt");
    return this.http.post(`${this.url}registro_tecnico.php`, JSON.stringify(register));
  }
  anadirProducto(register) {
    return this.http.post(`${this.url}add_producto.php`, JSON.stringify(register));
  }
  anadirAveria(register) {
    return this.http.post(`${this.url}add_averia.php`, JSON.stringify(register));
  }
  listarAverias(averia) {
    return this.http.post(`${this.url}listaveria.php`, JSON.stringify(averia));
  }
  asignarAveria(averia) {
    return this.http.post(`${this.url}asignaraveria.php`, JSON.stringify(averia));
  }
  listarProductos(productos) {
    return this.http.post(`${this.url}listproductos.php`, JSON.stringify(productos));
  }
  modificarCliente(mod) {
    //console.log(mod);

    return this.http.post(`${this.url}modCliente.php`, JSON.stringify(mod));

  }
  modificarEmpledo(mod) {
    //console.log(mod);
    return this.http.post(`${this.url}modEmpleado.php`, JSON.stringify(mod));

  }
  modificarProducto(mod) {
    //console.log(mod);
    return this.http.post(`${this.url}mod_producto.php`, JSON.stringify(mod));

  }

  anadirEvento(evento){
    return this.http.post(`${this.url}add_evento.php`, JSON.stringify(evento));
  }


  setDatos(datos) {
    this.datos = datos;
  }

  getDatos() {
    //console.log(this.datos);

    return this.datos;
  }

  logged() {
    if (localStorage.getItem('nombre') != null) {
      return true;
    } else {
      return false
    }
  }
}
