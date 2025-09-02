import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-forget-password-confirm-email',
  templateUrl: './forget-password-confirm-email.component.html',
  styleUrls: ['./forget-password-confirm-email.component.css']
})
export class ForgetPasswordconfirmemailComponent implements OnInit {
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
