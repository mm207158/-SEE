import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-new-password-successful',
  templateUrl: './new-password-successful.component.html',
  styleUrls: ['./new-password-successful.component.css']
})
export class NewPasswordSuccessfulComponent implements OnInit {
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
