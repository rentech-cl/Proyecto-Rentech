import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(    private router: Router    ) { }

  ngOnInit(): void {
  }

  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
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
    this.router.navigate(['/']);
  }

}
