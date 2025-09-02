import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; // Import Router
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute


@Component({
  selector: 'app-try-on',
  templateUrl: './try-on.component.html',
  styleUrls: ['./try-on.css']
})
export class Tryon implements OnInit {

  public url : any; 
  public productId: string; // Define productId property



  constructor(private router: Router,private route: ActivatedRoute) { this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.url = event.url;
    }
}); }

  ngOnInit(): void {
    // Check if the login component is loaded
    this.route.queryParams.subscribe(params => {
      this.productId = params['imageId']; // Retrieve ImageId from query parameters
      console.log('Product ImageId:', this.productId);
      // Now you have access to the ImageId in this component
    });
  }
  // navigateToRegister() {
  //   this.router.navigate(['/register']); // Navigate to register component
  // }
  
  navigateToTryOnPhoto(): void {
    // Navigate to try-on-photo and pass the productId as a query parameter
    this.router.navigate(['/pages/try-on-photo'], { queryParams: { imageId: this.productId } });
  }

  navigateToTryOnVideo(): void {
    // Navigate to try-on-photo and pass the productId as a query parameter
    this.router.navigate(['/pages/try-on-video'], { queryParams: { imageId: this.productId } });
  }
}
