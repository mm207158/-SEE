import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.getUserData()
  }
  user:any;
  getUserData() {
    this.userService.getUserData().subscribe({
      next: (res: any) => {
        this.user = res;
        console.log(this.user);
        
      },
    });
  }

  updataUserData(body:any) {
    this.userService.updataUserData(body).subscribe({
      next: (res: any) => {
        this.user = res;
      },
    });
  }
}
