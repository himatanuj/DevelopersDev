import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRes, UserRes } from './login.model'

@Injectable()

export class LoginService {

    private loginUrl = "https://developerjwt.herokuapp.com/api/auth/login";
    private userUrl = "https://developerjwt.herokuapp.com/api/auth/userinfo";

    constructor(private http: HttpClient){}

    loginEmp(user:LoginRes): Observable<LoginRes>{
        return this.http.post<LoginRes>(this.loginUrl,user)
    }

    getUserInfo(token:string): Observable<UserRes>{
        localStorage.setItem('Token_Number',token);
        return this.http.get<UserRes>(this.userUrl,{headers:{'x-access-token':token}})
    }

}