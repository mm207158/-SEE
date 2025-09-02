import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  ProductDetailsMainSlider,
  ProductDetailsThumbSlider,
} from "../../../../shared/data/slider";
import { ProductSlider } from "../../../../shared/data/slider";

import { Product } from "../../../../shared/classes/product";
import { ProductService } from "../../../../shared/services/product.service";
import { SizeModalComponent } from "../../../../shared/components/modal/size-modal/size-modal.component";
import { GlassesService } from "src/app/glasses-service.service";
import { AccessoriesService } from "src/app/accessories.service";
import { LensesService } from "src/app/lenses.service";
import { CardService } from "src/app/services/card.service";

@Component({
  selector: "app-product-left-sidebar",
  templateUrl: "./product-left-sidebar.component.html",
  styleUrls: ["./product-left-sidebar.component.scss"],
})
export class ProductLeftSidebarComponent implements OnInit {
  public product: Product = {};
  public counter: number = 1;
  public activeSlide: any = 0;
  public selectedSize: any;
  public mobileSidebar: boolean = false;
  public active = 1;
  public products: Product[] = [];
  public productCollections: any[] = [];
  public ProductSliderConfig: any = ProductSlider;
  id: any;
  public colors: string[] = [];
  public ImageSrc: string;
  // public images: any[] = [
  //   { src: './assets/images/product/fashion/1.png', alt: 'Image 1' },
  //   { },

  // ];
  @ViewChild("sizeChart") SizeChart: SizeModalComponent;

  public ProductDetailsMainSliderConfig: any = ProductDetailsMainSlider;
  public ProductDetailsThumbConfig: any = ProductDetailsThumbSlider;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productService: ProductService,
    public cardService: CardService,
    private glasses: GlassesService,
    private accessoriesService: AccessoriesService,
    private lensesService: LensesService
  ) {
    this.route.data.subscribe((response) => {
      if (response && response.data) {
        this.product = response.data;
      }
    });

    this.id = this.route.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.getglassbyid();
    
  }

  // Get Product Color
  Color(variants) {
    const uniqColor = [];
    for (let i = 0; i < Object.keys(variants).length; i++) {
      if (uniqColor.indexOf(variants[i].color) === -1 && variants[i].color) {
        uniqColor.push(variants[i].color);
      }
    }
    return uniqColor;
  }

  getglassbyid() {
    console.log(this.id);
    this.glasses.getGlassesbyid(this.id).subscribe({
      next: (product: any) => {
        this.product = product;
        console.log(product);
      },
    });
  }
  getaccessorybyid() {
    console.log(this.id);
    this.accessoriesService.getAccessorybyid(this.id).subscribe({
      next: (product: any) => {
        this.product = product;
        console.log(product);
      },
    });
  }
  getLensesbyid() {
    console.log(this.id);
    this.lensesService.getLensesbyid(this.id).subscribe({
      next: (product: any) => {
        this.product = product;
        console.log(product);
      },
    });
  }

  getDefaultImage(product: any): string {
    const defaultImage = product.pictureUrl.find((img) => img.isDefault);

    return defaultImage
      ? defaultImage.pictureUrl
      : "assets/images/default-product-image.jpg"; // Provide default image path if no default image found
  }

 
  // Increament
  increment() {
    this.counter++;
  }

  // Decrement
  decrement() {
    if (this.counter > 1) this.counter--;
  }

  // Add to cart
  addToCart() {
    let id = localStorage.getItem("id");
    if (!id) {
      id = this.generateGUID();
      localStorage.setItem("id", id);
    }
    const card = {
      id: id,
      items: [
        {
          id: this.product.id,
          productName: this.product.productName,
          price: this.product.price,
          quantity: this.counter,
          pictureUrl: this.product.pictureUrl[0].pictureUrl,
          category: this.product.category,
          brand: this.product.brand,
          color: "red",
          productType: 0,
        },
      ],
    };
    this.cardService.addToCard(card).subscribe({
      next: (res: any) => {
        this.router.navigate(["/shop/cart"]);
      },
    });
  }

  // Buy Now
 
  async buyNow(product: any) {
    product.quantity = this.counter || 1;
    const status = await this.productService.addToCart(product);
    if (status)
      this.router.navigate(['/shop/checkout']);
  }

  // Add to Wishlist
  addToWishlist(product: any) {
    this.productService.addToWishlist(product);
  }

  // Toggle Mobile Sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find((i) => i === collection)) {
        return item;
      }
    });
  }
  getProductDetails(id: any): void {
    this.glasses.getGlassesbyid(id).subscribe({
      next: (product: any) => {
        this.product = product; // Assign the product details to the product object
        console.log("Product details:", this.product); // Debugging: Log the product details
      },
      error: (error) => {
        console.error("Error fetching product details:", error); // Debugging: Log any errors
      },
    });
  }
  navigateToTryOn(imageId: string): void {
    this.router.navigate(["/pages/try-on"], {
      queryParams: { imageId: imageId },
    });
  }
  getDefaultImageId(product: any): string {
    const defaultImage = product.pictureUrl.find((img) => img.isDefault);
    return defaultImage ? defaultImage.id : ""; // Return the ImageId if found, otherwise an empty string
  }
  generateGUID(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
