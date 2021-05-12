import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Averia } from 'src/app/models/averia';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-averias',
  templateUrl: './averias.component.html',
  styleUrls: ['./averias.component.css']
})
export class AveriasComponent implements OnInit {
  listaraveria: AveriasComponent;
  averia= new Averia;
  nombre: String;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.ClienteService.listarAverias("averias").subscribe(
      datos => {
        try {
          console.log(datos)
          this.averia=datos;
          console.log(this.averia)
        }
        catch (error) {
          console.log("error")
        }
      });

  }

}
