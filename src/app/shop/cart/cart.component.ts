import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ProductService } from "../../shared/services/product.service";
import { Product } from "../../shared/classes/product";
import { CardService } from "src/app/services/card.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.scss"],
})
export class CartComponent implements OnInit {
  public ImageSrc: string;
  public images: any[] = [
    // Define your image dataset here
    { src: "./assets/images/product/fashion/1.png", alt: "Image 1" },
    { src: "./assets/images/product/fashion/2.png", alt: "Image 2" },
    { src: "./assets/images/product/fashion/3.png", alt: "Image 3" },
    // Add more images as needed
  ];
  public products: any[] = [];

  constructor(
    public productService: ProductService,
    private cardService: CardService
  ) {
    this.productService.cartItems.subscribe(
      (response) => (this.products = response)
    );
  }

  ngOnInit(): void {
    this.getCard();
  }

  public get getTotal(): Observable<number> {
    return this.productService.cartTotalAmount();
  }

  // Increament
  increment(product, qty = 1) {
    this.productService.updateCartQuantity(product, qty);
  }

  // Decrement
  decrement(product, qty = -1) {
    this.productService.updateCartQuantity(product, qty);
  }

  public removeItem(product: any) {
    this.productService.removeCartItem(product);
  }
  totalPrice = 0;
  getCard() {
    const id = localStorage.getItem("id");
    this.cardService.getCard(id).subscribe({
      next: (res: any) => {
        this.products = res.items;
        this.products.forEach((item) => {
          this.totalPrice += item.price * item.quantity;
        });
      },
    });
  }

  deleteCard(index: any) {
    const basketId = localStorage.getItem("id");
    const itemId = this.products[index].id;
    this.cardService.deleteCard(basketId, itemId).subscribe({
      next: (res: any) => {
      },
    });
    this.products.splice(index, 1);
    this.totalPrice -=  this.products[index].price * this.products[index].quantity;
  }
}