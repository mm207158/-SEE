import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router"; // Import Router
import { AuthService } from "src/app/services/auth.service";
import { CardService } from "src/app/services/card.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.css"],
})
export class LoginComponent implements OnInit {
  public url: any;
  userForm: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private cardService: CardService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {
    // Check if the login component is loaded
  }

  onSubmit(value: any) {
    this.authService.login(value).subscribe({
      next: (res: any) => {
        localStorage.setItem("token", res.token);
        console.log("token", res.token)
        const basketID = localStorage.getItem("id");
        this.cardService.addToCardByUserId({ basketID }).subscribe({
          next: (res: any) => {},
        });
        this.router.navigateByUrl("/home/home-page");
      },
    });
  }
  navigateToRegister() {
    this.router.navigate(["/register"]); // Navigate to register component
  }
}
