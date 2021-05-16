import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';

import { FeatherModule } from 'angular-feather';
import {
  Mail, Link, PhoneCall,  Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle, ShoppingBag, ShoppingCart, FileText
} from 'angular-feather/icons';
import { ScrollspyDirective } from './scrollspy.directive';
import { AnadirProdComponent } from './anadir-prod/anadir-prod.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnadirAveriaComponent } from './anadir-averia/anadir-averia.component';
import { AlquilarProductoComponent } from './alquilar-producto/alquilar-producto.component';
import { VenderProductoComponent } from './vender-producto/vender-producto.component';
import { AveriasComponent } from './averias/averias.component';
import { AnadirTecnicoComponent } from './anadir-tecnico/anadir-tecnico.component';
import { AveriasDisponiblesComponent } from './averias-disponibles/averias-disponibles.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HistorialPedidoComponent } from './historial-pedido/historial-pedido.component';
import { ListarSalidasComponent } from './listar-salidas/listar-salidas.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/','.json');
}


const icons = {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle, ShoppingBag, ShoppingCart, FileText
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, ScrollspyDirective, AnadirProdComponent, AnadirAveriaComponent, AlquilarProductoComponent, VenderProductoComponent, AveriasComponent, AnadirTecnicoComponent , HistorialPedidoComponent  ,   AveriasDisponiblesComponent, ListarSalidasComponent],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, FeatherModule, ScrollspyDirective, AnadirProdComponent, AnadirAveriaComponent, AlquilarProductoComponent, VenderProductoComponent, AveriasComponent, AnadirTecnicoComponent, HistorialPedidoComponent , AveriasDisponiblesComponent, ListarSalidasComponent]
})
export class SharedModule { }
