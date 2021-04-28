import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/confirmed.validator';
import { ClienteService } from '../../services/cliente.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})

/**
 * Index-1 component
 */
export class IndexComponent implements OnInit {

  myForm: FormGroup;
  usuario = new Cliente;
  registerForm: FormGroup;
  submitted = false;
  p:String = null;

  currentSection = 'home';

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private router: Router,
    private ClienteService: ClienteService
    ) {

    }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      correo: ['', [Validators.email, Validators.required]],
      contrasena: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
    }
    );
    this.registerForm = this.formBuilder.group({
      nombre: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      apellido: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      correo: ['', [Validators.email, Validators.required]],
      telefono: ['', [ Validators.required, Validators.pattern("[0-9 ]{9}")]],
      iban: ['', [Validators.minLength(24), Validators.maxLength(24), Validators.required]],
      dni: ['', [Validators.required, Validators.pattern("^[0-9]{8}[A-Za-z]$")]],
      cp: ['', [Validators.required, Validators.pattern("[0-9 ]{5}")]],
      direccio: ['', [Validators.minLength(2), Validators.maxLength(60), Validators.required]],
      contrasena: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
      confirm_password: [null, Validators.required],
    }, {
      validator: ConfirmedValidator('contrasena', 'confirm_password')
    });
  }

  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('nav-sticky');
    } else {
      navbar.classList.remove('nav-sticky');
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }

  /**
   * Login modal
   */
  loginModal(content) {
    this.modalService.open(content, { centered: true });
  }

  login(){
    console.log('login')
    console.log(this.usuario)
    this.ClienteService.login(this.usuario).subscribe (
      datos => {
        console.log(datos)
      }
    )
  }



  /**
   * Register modal
   * @param registercontent content
   */
  registerModal(registercontent) {
    this.modalService.open(registercontent, { centered: true });
  }

  register() {
    this.submitted = true;
    console.log(this.registerForm.value);
    if (this.registerForm.invalid) {
      return;
    }else{
      console.log("Has sido registrado!!");
      this.ClienteService.register(this.registerForm.value).subscribe (
        datos => {
          console.log(datos)
        }
      );
    }
  }

  get f() {return this.registerForm.controls; }

}
