import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vender-productos',
  templateUrl: './vender-producto.component.html',
  styleUrls: ['./vender-producto.component.css']
})
export class VenderProductoComponent implements OnInit {

  constructor(  private router: Router ) { }

  ngOnInit( ): void {
  }


  logout(){
    localStorage.removeItem('nombre');
    localStorage.removeItem('apellido');
    localStorage.removeItem('nameUser');
    localStorage.removeItem('id');
    localStorage.removeItem('correo');
    localStorage.removeItem('telefono');
    localStorage.removeItem('iban');
    localStorage.removeItem('dni');
    localStorage.removeItem('cp');
    localStorage.removeItem('direccio');
    localStorage.removeItem('password');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

}
