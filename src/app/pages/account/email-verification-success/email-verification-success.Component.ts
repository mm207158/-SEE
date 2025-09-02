import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-email-verification-success',
  templateUrl: './email-verification-success.component.html',
  styleUrls: ['email-verification-success.component.css']
})
export class EmailVerificationSuccess implements OnInit {
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
