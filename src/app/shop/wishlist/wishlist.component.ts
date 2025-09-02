import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../../shared/services/product.service";
import { Product } from "../../shared/classes/product";
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  public ImageSrc : string;
  public images: any[] = [  // Define your image dataset here
    { src: './assets/images/product/fashion/1.png', alt: 'Image 1' },
    { src: './assets/images/product/fashion/2.png', alt: 'Image 2' },
    { src: './assets/images/product/fashion/3.png', alt: 'Image 3' },
    // Add more images as needed
  ];
  public products: Product[] = [];

  constructor(private router: Router, 
    public productService: ProductService,
    private cardService:CardService) {
    this.productService.wishlistItems.subscribe(response => this.products = response);
  }

  ngOnInit(): void {
    this.getWishlist();
  }

  async addToCart(product: any) {
    const status = await this.productService.addToCart(product);
    if(status) {
      this.router.navigate(['/shop/cart']);
      this.removeItem(product);
    }
  }

  removeItem(product: any) {
    this.productService.removeWishlistItem(product);
  }
  getWishlist() {
    this.cardService.getWishlist().subscribe({
      next: (res: any) => {
        this.products = res;
        console.log(res);
      },
    });
  }
  deleteWish(index: any) {
    const itemId = this.products[index].id;
    this.cardService.deleteWish(itemId).subscribe({
      next: (res: any) => {
      },
    });
    this.products.splice(index, 1);
  }
}
