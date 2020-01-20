import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public register(user) {

    return this.http.post(environment.backendUrl + '/user/register', user, {headers: {skip: 'true'}});
  }

  public login(user) {
    return this.http.post(environment.backendUrl + '/authenticate', user, {headers: {skip: 'true'}});
  }

  public getAllUsers() {
    return this.http.get(environment.backendUrl + '/user', {headers: {skip: 'true'}});
  }
}
