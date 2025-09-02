import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-manager',
  templateUrl: './register-manager.component.html',
  styleUrls: ['./register-manager.css']
})
export class RegisterManagerComponent implements OnInit {
  public url: any;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {}

  onSubmit(value: any) {
    const managerData = {
      email: value.email,
      firstName: value.firstName,
      lastName: value.lastName,
      password: value.password,
      storeName: value.storeName,
      businessLocation: value.businessLocation,
      paymentInfo: {
        cardNumber: value.cardNumber,
        holderName: value.holderName,
        expireOnDate: value.expireOnDate,
        csv: value.csv,
      }
    };

    this.authService.signupAsManager(managerData).subscribe({
      next: (res: any) => {
        localStorage.setItem("email", value.email);
        this.sendConfirmationEmail(value.email); // Send confirmation email
        this.router.navigateByUrl("/pages/register-confirm-email-manager");
      },
    });
  }

  sendConfirmationEmail(email: string) {
    const emailData = { email };
    this.authService.sendEmail(emailData).subscribe({
      next: (res: any) => {
        console.log('Confirmation email sent successfully');
      },
      error: (err: any) => {
        console.error('Error sending confirmation email', err);
      }
    });
  }
}
