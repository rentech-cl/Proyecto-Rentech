import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  anadir_producto:boolean= false;
  averia:boolean= false;
  anadir_averia:boolean= false;
  alquilar_producto:boolean= false;
  vender_producto:boolean= false;
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
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }


  Alquilar_producto(){
  }

  anadir_prod(){
    if(this.anadir_producto==false){
      this.anadir_producto=true;

    }else{
      this.anadir_producto=false;
    }
  }

  enviaraveria(){
    if(this.anadir_averia==false){
      this.anadir_averia=true;

    }else{
      this.anadir_averia=false;
    }
  }

  alquilar_prod(){
    if(this.alquilar_producto==false){
      this.alquilar_producto=true;

      }else{
        this.alquilar_producto=false;
      }
    }

    vender_prod(){
      if(this.vender_producto==false){
        this.vender_producto=true;

        }else{
          this.vender_producto=false;
        }
      }

      averias(){
        if(this.averia==false){
          this.averia=true;

          }else{
            this.averia=false;
          }
        }

}
