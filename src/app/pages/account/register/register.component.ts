import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router"; // Import Router
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./Register.component.css"],
})
export class RegisterComponent implements OnInit {
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
    this.authService.signup(value).subscribe({
      next: (res: any) => {
        localStorage.setItem("email", value.email);
        this.router.navigateByUrl("/pages/register-confirm-email-user");
      },
    });
  }
}
