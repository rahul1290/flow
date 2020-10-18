import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(localStorage.getItem('secretKey') != null){
        console.log('IF'+localStorage.getItem('secretKey'));
        return true;
      } else {
        debugger;
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
