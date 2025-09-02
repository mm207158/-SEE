import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  url: string =
    "https://amirasamir-001-site1.qtempurl.com/api/Users/";
  constructor(private http: HttpClient) {}
  getUserData() {
    return this.http.get(this.url + "GetCurrentUser");
  }
  updataUserData(body: any) {
    return this.http.put(this.url + "update-user", body);
  }
}
