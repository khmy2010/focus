import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/service/auth.service';
import { FireService } from '../services/fire.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private fire: FireService) {

    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | boolean{
        if (!this.authService.idToken) {
            return false;
        }
        return this.fire.checkAuth().pipe(map((obj) => Object.keys(obj).length > 0));
    }
}