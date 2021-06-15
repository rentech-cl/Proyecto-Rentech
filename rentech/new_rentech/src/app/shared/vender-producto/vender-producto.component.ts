import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { venderProducto } from 'src/app/models/venderProducto';
import { ClienteService } from '../service/cliente.service';
import Swal from 'sweetalert2';
import { Evento } from 'src/app/models/evento';
import { consultaEvento } from 'src/app/models/consultaEvento';
import { Lista } from 'src/app/models/lista';

@Component({
  selector: 'app-vender-producto',
  templateUrl: './vender-producto.component.html',
  styleUrls: ['./vender-producto.component.css']
})
export class VenderProductoComponent implements OnInit {
  nombre: String;
  idEmpleado: string = null;
  productos;
  eventos;
  myForm: FormGroup;
  lista = new Lista;
  evento;
  selectControl: FormControl = new FormControl();

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.ClienteService.listarProductos("").subscribe(
      datos => {
        try {
          console.log(datos)
          this.eventos=datos;
          console.log(this.eventos[1][1])
          //console.log(this.productos)
        }
        catch (error) {
          //console.log("error")
        }
      });
      this.idEmpleado = localStorage.getItem('id');
      this.myForm = this.formBuilder.group({
        nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
        acompanantes: ['', [Validators.minLength(1), Validators.maxLength(255), Validators.required]],
        tipo: ['', [Validators.minLength(1), Validators.maxLength(255), Validators.required]],
        botella: ['', [Validators.minLength(1), Validators.maxLength(255), Validators.required]],
        precio: ['', [Validators.minLength(1), Validators.maxLength(255), Validators.required]],
        idEvento: ['', [Validators.minLength(1), Validators.maxLength(255), Validators.required]],
      }
      );
  }
  enviar(){
    console.log(this.lista)
    this.ClienteService.crearLista(this.lista).subscribe(
      datos => {
        this.eventos=datos;
        console.log(datos)
        if (datos['result'] === 'OK') {
          Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Lista añadida!',
            showConfirmButton: false,
            timer: 1500
          })
        }else{
          Swal.fire({
            position:'top',
            icon: 'error',
            title:'Error!',
            showConfirmButton: false,
            timer: 1500
          })
        }

          //console.log(this.productos)
    })
    }





}
