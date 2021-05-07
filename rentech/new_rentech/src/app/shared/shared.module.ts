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
  ArrowRightCircle, PieChart, Triangle, ShoppingBag
} from 'angular-feather/icons';
import { ScrollspyDirective } from './scrollspy.directive';
import { AnadirProdComponent } from './anadir-prod/anadir-prod.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnadirAveriaComponent } from './anadir-averia/anadir-averia.component';
import { AlquilarProductoComponent } from './alquilar-producto/alquilar-producto.component';
import { VenderProductoComponent } from './vender-producto/vender-producto.component';



const icons = {
  Mail, Link, PhoneCall, Clock, MapPin, Facebook, Twitter, Instagram, Linkedin, Send, Calendar, User, Server, Rss, Layout, LifeBuoy,
  ArrowRightCircle, PieChart, Triangle, ShoppingBag
};

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, ScrollspyDirective, AnadirProdComponent, AnadirAveriaComponent, AlquilarProductoComponent, VenderProductoComponent ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // tslint:disable-next-line: max-line-length
  exports: [FeaturesComponent, PricingComponent, BlogComponent, ContactComponent, ServicesComponent, FooterComponent, FeatherModule, ScrollspyDirective, AnadirProdComponent, AnadirAveriaComponent, AlquilarProductoComponent, VenderProductoComponent ]
})
export class SharedModule { }
