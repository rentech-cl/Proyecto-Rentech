import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../../models/cliente';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private currentUserSubject: BehaviorSubject<Cliente>;
  public currentUser: Observable<Cliente>;

  url = 'http://localhost/'; // disponer de el url de su servidor que tiene los archivos PHP

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
    return this.http.post(`${this.url}registro_tecnico.php`, JSON.stringify(register));
  }
  anadirProducto(register) {
    return this.http.post(`${this.url}add_producto.php`, JSON.stringify(register));
  }
  listarAverias(averia) {
    return this.http.post(`${this.url}listaveria.php`, JSON.stringify(averia));
  }
  listarProductos(productos) {
    return this.http.post(`${this.url}listproductos.php`, JSON.stringify(productos));
  }
  asignarAveria(averia) {
    return this.http.post(`${this.url}asignaraveria.php`, JSON.stringify(averia));
  }
  alquilerProducto(alquilarProducto) {
    return this.http.post(`${this.url}add_alquiler.php`, JSON.stringify(alquilarProducto));
  }
  venderProducto(ventaProducto) {
    return this.http.post(`${this.url}add_venta.php`, JSON.stringify(ventaProducto));
  }
  logged(){
    if(localStorage.getItem('nombre')!=null){
      return true;
    }else{
      return false
    }
  }
}
