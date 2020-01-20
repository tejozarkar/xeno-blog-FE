import {Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private static TOKEN = 'token';
  public username: string;
  public password: string;
  public users;

  constructor(private readonly authService: AuthService) {
  }

  ngOnInit() {
  }

  public onLogin(): void {
    const user = {
      username: this.username,
      password: this.password
    };
    console.log('Loggin user');

    this.authService.login(user)
      .subscribe(resp => {
        console.log(resp);
        sessionStorage.setItem('token', resp[LoginComponent.TOKEN]);
        this.getUsers();
      });
  }

  public getUsers() {
    this.authService.getAllUsers()
      .subscribe(users => {
        this.users = users;
        console.log(users);
      });
  }
}
