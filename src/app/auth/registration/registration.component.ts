import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

  public onRegister(): void{
    let user = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    }
    this.authService.register(user)
    .subscribe(resp=>{
      console.log(resp);
    });
  }

}
