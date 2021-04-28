import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  url = 'http://localhost/'; // disponer de el url de su servidor que tiene los archivos PHP

  constructor(private http: HttpClient) { }

  login(login) {
    return this.http.post(`${this.url}login.php`, JSON.stringify(login));
  }
  register(register) {
    return this.http.post(`${this.url}registro_cliente.php`, JSON.stringify(register));
  }
}
