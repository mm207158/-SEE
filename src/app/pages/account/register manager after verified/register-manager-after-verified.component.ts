import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register-manager-after-verified',
  templateUrl: './register-manager-after-verified.component.html',
  styleUrls: ['./register-manager-after-verified.component.css']
})
export class RegisterManagerAfterVerifiedComponent implements OnInit {
  public url : any; 


  constructor(private router: Router) {


    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
  });
   }

  ngOnInit(): void {
  }

}
