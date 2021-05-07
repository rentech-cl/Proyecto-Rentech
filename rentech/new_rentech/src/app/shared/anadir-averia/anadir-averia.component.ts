import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Averia } from 'src/app/models/averia';
@Component({
  selector: 'app-anadir-averia',
  templateUrl: './anadir-averia.component.html',
  styleUrls: ['./anadir-averia.component.css']
})
export class AnadirAveriaComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  averia_nueva = new Averia;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      contacto: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      descripcion: ['', [Validators.minLength(2), Validators.maxLength(255), Validators.required]],
      urgencia: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
    }
    );
  }

  enviaraveria(){
    console.log(this.averia_nueva)
  }

}
