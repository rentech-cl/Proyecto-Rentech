import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

import { PagesRoutingModule } from './pages-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlquilarProductoComponent } from './alquilar-producto/alquilar-producto.component';
import { VenderProductoComponent } from './vender-producto/vender-producto.component';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [IndexComponent, DashboardComponent, AlquilarProductoComponent, VenderProductoComponent, ModificarPerfilComponent, ErrorComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ScrollToModule.forRoot(),
    NgbModalModule,
    NgxYoutubePlayerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
