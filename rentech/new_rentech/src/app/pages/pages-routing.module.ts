import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth.guards';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
},

{
  path: 'dashboard',
  component: DashboardComponent , canActivate: [AuthGuard]
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
