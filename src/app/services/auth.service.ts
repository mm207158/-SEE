import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  url: string = "https://amirasamir-001-site1.qtempurl.com/api/";
  constructor(private http: HttpClient) {}
  signup(body: any) {
    console.log(body);

    return this.http.post(this.url + "Users/register", body);
  }



  login(body: any) {
    return this.http.post(this.url + "Users/login", body);
  }
  sendEmail(body: any) {
    return this.http.post(this.url + "Users/send-confirmation-email", body);
  }
  verifyEmail(body: any) {
    return this.http.get(
      this.url + "Users/confirm-email?email=" + body.email + "&code=" + body.code
    );
  }


  signupAsManager(body: any) {
    console.log(body);

    return this.http.post(this.url + "Managers/Register", body);
  }

}
