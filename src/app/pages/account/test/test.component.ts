import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Import HttpClient for making HTTP requests

@Component({
  selector: 'app-login',
  templateUrl: './test.component.html',
  styleUrls: ['./test.css']
})
export class test implements OnInit { // Corrected class name to follow Angular conventions

  public url: any;
  productDetails: any;

  constructor(private router: Router, private http: HttpClient) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.getProductDetails(); // Call getProductDetails when the component initializes
  }

  getProductDetails() {
    const url = 'http://abdelrahman14-001-site1.jtempurl.com/api/products/glass/000717e0-977f-4b14-8ba6-4bb9ed57e83e';
    const username = '11163223';
    const password = '60-dayfreetria';

    const authorization = `Basic ${btoa(username + ':' + password)}`;
    const headers = new HttpHeaders({ Authorization: authorization });

    this.http.get(url, { headers })
      .subscribe(response => {
        this.productDetails = response;
      });
  }

  navigateToRegister() {
    this.router.navigate(['/register']); // Navigate to register component
  }
}