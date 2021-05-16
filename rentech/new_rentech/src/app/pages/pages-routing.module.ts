import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guards';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { AlquilarProductoComponent } from './alquilar-producto/alquilar-producto.component';
import { VenderProductoComponent } from './vender-producto/vender-producto.component';
import { ModificarPerfilComponent } from './modificar-perfil/modificar-perfil.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
},


{
  path: 'dashboard',
  component: DashboardComponent , canActivate: [AuthGuard]
},
{
  path: 'AquilarProducto',
  component: AlquilarProductoComponent , canActivate: [AuthGuard]
},
{
  path: 'VenderProducto',
  component: VenderProductoComponent , canActivate: [AuthGuard]
},
{
  path: 'ModificarPerfil',
  component: ModificarPerfilComponent , canActivate: [AuthGuard]
},
{
  path: 'ModificarEmpleado',
  component: ModificarEmpleadoComponent , canActivate: [AuthGuard]
},
{
  path: '**',
  component: ErrorComponent
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
