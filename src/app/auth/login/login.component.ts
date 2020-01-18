import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public users;

  constructor(private readonly authService: AuthService) { }

  ngOnInit() {
  }

  public onLogin(): void{
    let user = {
      username:this.username,
      password: this.password
    }
    console.log("Loggin user");
    
    this.authService.login(user)
    .subscribe(resp=>{
      console.log(resp);
      sessionStorage.setItem("token", resp['token']);
      this.getUsers();
    })
    
  }

  public getUsers(){
    this.authService.getAllUsers()
    .subscribe(users=>{
      this.users = users;
      console.log(users);
      
    })
  }

}
