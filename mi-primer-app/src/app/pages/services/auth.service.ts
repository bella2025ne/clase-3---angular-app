import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn:"root"})

export class AuthService {
    private isLoggedIn = false;

    constructor(private router: Router) {}

    login( user:string, pass:string):boolean{
        if(user==='admin' && pass === '1234'){
            this.isLoggedIn = true;
            return true;
        }
        return false;
    }

    logout(){
        this.isLoggedIn = false;
        this.router.navigate(['/']);
    }

    isAuthenticaded(){
        return this.isLoggedIn;
    }
}


