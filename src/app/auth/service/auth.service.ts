import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public register(user){
    return this.http.post("http://localhost:5000/user/register", user,  { headers: { skip: "true" } });
  }

  public login(user){
    return this.http.post("http://localhost:5000/authenticate", user,  { headers: { skip: "true" } });
  }

  public getAllUsers(){
    return this.http.get("http://localhost:5000/user", { headers: { skip: "true" } });
  }
}
