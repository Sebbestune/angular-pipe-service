import { Component } from '@angular/core';
import { UserService } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipe-show';
  today: number = Date.now();

  me = {
    id: 0,
    name: "",
    email: "henry43@example.net",
    password: "password",
  }

  user2 = {
    id: 0,
    name: "",
    email: "",
    password: ""
  }

  constructor(private userService: UserService){
    //userService.loginUser(this.me)
  }

  login(){
    this.userService.loginUser(this.me);
  }

  getUser(){
    this.userService.getUser2().subscribe(res => {
      console.log(res[0]);
      this.user2 = res[0];
    })
  }
}
