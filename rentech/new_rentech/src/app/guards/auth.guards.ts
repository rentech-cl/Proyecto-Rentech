  
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ClienteService } from '../services/cliente.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private ClienteService: ClienteService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.ClienteService.currentUserValue;
    if (currentUser) {
      return true;
    }else{
      this.router.navigate(['/login']), { queryParams: { returnUrl: state.url } };
      return false;
    }
  }
}