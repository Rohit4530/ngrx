import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponseData } from "../models/AuthResponseData";
import { User } from "../models/User.model";

@Injectable({providedIn:'root'})
export class AuthService{

    constructor(private http:HttpClient){}

    login(email:string, password:string):Observable<AuthResponseData> {
       return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`, {
            email,
            password,
            returnSecureToken: true
        }
        );
    }
    formatUser(data: AuthResponseData){
        const expirationDate=new Date(new Date().getTime() + Number(data.expiresIn) * 1000)
        const user= new User(data.email,data.idToken,data.localId,expirationDate)
        console.log(data);
        
        return user
    }
    getErrorMessage(message:string ){
       switch(message){
        case 'EMAIL_NOT_FOUND':
            return 'Email not found'
        case 'INVALID_PASSWORD':
            return "Invalid Password"
        default:
            return "unknown error occured"
       }
    }
}