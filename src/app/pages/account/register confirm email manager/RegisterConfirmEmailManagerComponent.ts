import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router"; // Import Router
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: 'app-register-confirm-email-manager',
  templateUrl: './register-confirm-email-manager.component.html',
  styleUrls: ['register-confirm-email-manager.component.css']
})
export class RegisterConfirmEmailManagerComponent implements OnInit {
  public url: any;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {}

  resend() {
    const email = localStorage.getItem("email");
    this.authService.verifyEmail({ email }).subscribe({
      next: (res: any) => {},
    });
  }

  verifyEmail(value: any) {
    const code =
      "" +
      value.otp1 +
      value.otp2 +
      value.otp3 +
      value.otp4 +
      value.otp5 +
      value.otp6;
    const email = localStorage.getItem("email");
    const body = {
      email,
      code,
    };
    console.log(body);
    
    this.authService.verifyEmail(body).subscribe({
      next: (res: any) => {
        this.router.navigateByUrl("/pages/email-verification-success");
      },
    });
  }
}
