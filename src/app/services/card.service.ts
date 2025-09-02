import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CardService {
  url: string = "https://amirasamir-001-site1.qtempurl.com/api/";
  constructor(private http: HttpClient) {}
  addToCard(body: any) {
    return this.http.post(this.url + "Basket", body);
  }
  addToWishlist(body: any) {
    return this.http.post(this.url + "favorites", body);
  }
  addToCardByUserId(body: any) {
    return this.http.post(this.url + "Basket/assign-user-basket", body);
  }
  getWishlist() {
    return this.http.get(this.url + "favorites");
  }
  getCard(id: any) {
    return this.http.get(this.url + "Basket?id=" + id);
  }
  deleteCard(basketId: any, itemId: any) {
    return this.http.delete(this.url + basketId + "Basket/item/" + itemId);
  }
  deleteWish(basketId: any) {
    return this.http.delete(this.url + "favorites/" + basketId);
  }
}
