import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url: string = "https://amirasamir-001-site1.qtempurl.com/api/";
  constructor(private http: HttpClient) {}
  getCities() {
    return this.http.get(this.url + "Cities");
  }
  getAddresses() {
    return this.http.get(this.url + "Users/GetUserAddresses");
  }
  chechOut(body:any) {
    return this.http.post(this.url + "Orders/create-order-basket", body);
  }
  payment(body:any) {
    return this.http.post(this.url + "Payment/pay", body);
  }
}
