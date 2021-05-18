import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  anadir_producto: boolean = false;
  averia: boolean = false;
  anadir_averia: boolean = false;
  averiaDisp: boolean = false;
  alquilar_producto: boolean = false;
  salidas: boolean = false;
  listProdc: boolean = false;
  vender_producto: boolean = false;
  anadir_tecnic: boolean = false;
  historialpedido: boolean = false;
  isAdmin: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') === '21232f297a57a5a743894a0e4a801fc3') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
  logout() {
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
    localStorage.removeItem('role');
    this.router.navigate(['/index']);
  }


  Alquilar_producto() {
  }

  anadir_prod() {
    if (this.anadir_producto == false) {
      this.anadir_producto = true;
      this.averia = false;
      this.anadir_averia = false;
      this.alquilar_producto = false;
      this.vender_producto = false;
      this.averiaDisp = false;
      this.historialpedido = false;
      this.anadir_tecnic = false;
      this.salidas = false;
      this.listProdc = false;

    } else {
      this.anadir_producto = false;

    }
  }

  enviaraveria() {
    if (this.anadir_averia == false) {
      this.anadir_averia = true;
      this.averia = false;
      this.anadir_producto = false;
      this.alquilar_producto = false;
      this.vender_producto = false;
      this.averiaDisp = false;
      this.historialpedido = false;
      this.anadir_tecnic = false;
      this.salidas = false;
      this.listProdc = false;

    } else {
      this.anadir_averia = false;
    }
  }

  alquilar_prod() {
    if (this.alquilar_producto == false) {
      this.alquilar_producto = true;
      this.averia = false;
      this.anadir_producto = false;
      this.anadir_averia = false;
      this.vender_producto = false;
      this.averiaDisp = false;
      this.historialpedido = false;
      this.anadir_tecnic = false;
      this.salidas = false;
      this.listProdc = false;

    } else {
      this.alquilar_producto = false;
    }
  }

  vender_prod() {
    if (this.vender_producto == false) {
      this.vender_producto = true;
      this.averia = false;
      this.anadir_producto = false;
      this.anadir_averia = false;
      this.alquilar_producto = false;
      this.averiaDisp = false;
      this.historialpedido = false;
      this.anadir_tecnic = false;
      this.salidas = false;
      this.listProdc = false;

    } else {
      this.vender_producto = false;
    }
  }

  averias() {
    if (this.averia == false) {
      this.averia = true;
      this.vender_producto = false;
      this.anadir_producto = false;
      this.anadir_averia = false;
      this.alquilar_producto = false;
      this.vender_producto = false;
      this.averiaDisp = false;
      this.historialpedido = false;
      this.anadir_tecnic = false;
      this.salidas = false;
      this.listProdc = false;

    } else {
      this.averia = false;
    }
  }

  averia_disponible() {
    if (this.averiaDisp == false) {
      this.averiaDisp = true;
      this.averia = false;
      this.anadir_producto = false;
      this.anadir_averia = false;
      this.alquilar_producto = false;
      this.vender_producto = false;
      this.historialpedido = false;
      this.anadir_tecnic = false;
      this.salidas = false;
      this.listProdc = false;

    } else {
      this.averiaDisp = false;
    }
  }


  historial_pedido() {
    if (this.historialpedido == false) {
      this.historialpedido = true;
      this.averia = false;
      this.anadir_producto = false;
      this.anadir_averia = false;
      this.alquilar_producto = false;
      this.vender_producto = false;
      this.averiaDisp = false;
      this.anadir_tecnic = false;
      this.salidas = false;
      this.listProdc = false;

    } else {
      this.historialpedido = false;
    }
  }

  anadir_tecnico() {
    if (this.anadir_tecnic == false) {
      this.anadir_tecnic = true;
      this.averia = false;
      this.anadir_producto = false;
      this.anadir_averia = false;
      this.alquilar_producto = false;
      this.vender_producto = false;
      this.averiaDisp = false;
      this.historialpedido = false;
      this.salidas = false;
      this.listProdc = false;

    } else {
      this.anadir_tecnic = false;
    }
  }
  listarProductos() {
    if (this.listProdc == false) {
      this.listProdc = true;
      this.averia = false;
      this.anadir_producto = false;
      this.anadir_averia = false;
      this.alquilar_producto = false;
      this.vender_producto = false;
      this.averiaDisp = false;
      this.historialpedido = false;
      this.salidas = false;

    } else {
      this.listProdc = false;
    }
  }
  listarSalidas() {
    if (this.salidas == false) {
      this.salidas = true;
      this.averia = false;
      this.anadir_producto = false;
      this.anadir_averia = false;
      this.alquilar_producto = false;
      this.vender_producto = false;
      this.averiaDisp = false;
      this.historialpedido = false;
      this.anadir_tecnic = false;
      this.listProdc = false;


    } else {
      this.salidas = false;
    }
  }
}
