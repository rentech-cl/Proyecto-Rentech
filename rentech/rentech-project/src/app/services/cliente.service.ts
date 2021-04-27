import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  url = 'http://localhost:5050/'; // disponer de el url de su servidor que tiene los archivos PHP

  constructor(private http: HttpClient) { }

  login(login) {
    return this.http.post(`${this.url}login.php`, JSON.stringify(login));
  }
  register(register) {
    return this.http.post(`${this.url}register.php`, JSON.stringify(register));
  }
}
