import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  currentSection = 'home';

  constructor(
    private modalService: NgbModal,
    public formBuilder: FormBuilder,
    private router: Router
    ) {

    }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      correo: ['', [Validators.email, Validators.required]],
      contrasena: ['', [Validators.minLength(2), Validators.maxLength(15), Validators.required]],
    }
    );
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
  }



  /**
   * Register modal
   * @param registercontent content
   */
  registerModal(registercontent) {
    this.modalService.open(registercontent, { centered: true });
  }
}
