import { Component, OnInit, OnDestroy, ViewChild, Input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ProductSlider, CollectionSlider } from "../../shared/data/slider";
import { Product } from "../../shared/classes/product";
import { ProductService } from "../../shared/services/product.service";
import { GlassesService } from "src/app/glasses-service.service";
import { CartModalComponent } from "src/app/shared/components/modal/cart-modal/cart-modal.component";
import { QuickViewComponent } from "src/app/shared/components/modal/quick-view/quick-view.component";
import { CardService } from "src/app/services/card.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-glasses",
  templateUrl: "./glasses.component.html",
  styleUrls: ["./glasses.component.scss"],
})
export class glasses implements OnInit, OnDestroy {
  glasses: any[] = [];
  @Input() cartModal: boolean = false; // Default False

  @ViewChild("cartModal") CartModal: CartModalComponent;
  @ViewChild("quickView") QuickView: QuickViewComponent;

  public themeLogo: string = "assets/images/icon/logo-14.png"; // Change Logo

  public products: Product[] = [];
  public productCollections: any[] = [];

  public ProductSliderConfig: any = ProductSlider;
  public CollectionSliderConfig: any = CollectionSlider;
  public active;

  constructor(
    private _sanitizer: DomSanitizer,
    public productService: ProductService,
    private glassesService: GlassesService,
    private cardService: CardService,
    private router: Router
  ) {
    this.productService.getProducts.subscribe((response) => {
      this.products = response.filter((item) => item.type == "glasses");
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        });
      });
    });
  }

  public sliders = [
    {
      title: "Men Glasses",
      subTitle: "Eye Glasses",
      image: "assets/images/slider/1.png",
    },
    {
      title: "Women Glasses",
      subTitle: "Eye Glasses",
      image: "assets/images/slider/2.png",
    },
  ];

  // Collection
  public categories = [
    {
      image: "assets/images/categories/14.jpg",
      title: "men glasses",
      text: this._sanitizer.bypassSecurityTrustHtml(
        '<li><a href="#">Shock-resistant glasses</a></li><li><a href="#">Skeleton glasses</a></li><li><a href="#">Slow glasses</a></li><li><a href="#">Solar-powered glasses</a></li>'
      ),
    },
    {
      image: "assets/images/categories/15.jpg",
      title: "women glasses",
      text: this._sanitizer.bypassSecurityTrustHtml(
        '<li><a href="#">glassesmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio glasseses</a></li><li><a href="#">Citizen glasses</a></li>'
      ),
    },
    {
      image: "assets/images/categories/16.jpg",
      title: "kid glasses",
      text: this._sanitizer.bypassSecurityTrustHtml(
        '<li><a href="#">Manufacture dhorlogerie</a></li><li><a href="#">Mechanical glasses</a></li><li><a href="#">Microbrand glasseses</a></li><li><a href="#">MIL-W-46374</a></li>'
      ),
    },
  ];

  // collection
  public collections = [
    {
      image: "assets/images/collection/glasses/1.jpg",
      title: "minimum 10% off",
      text: "new glasses",
    },
    {
      image: "assets/images/collection/glasses/2.jpg",
    },
    {
      image: "assets/images/collection/glasses/3.jpg",
      title: "minimum 10% off",
      text: "gold glasses`",
    },
  ];

  ngOnInit() {
    this.glassesService.getGlasses().subscribe((data: any) => {
      this.glasses = data.items;
    });

    // this.glassesService.getGlasses().subscribe((data: any) => {
    //   this.glasses = data.items.map((item: any) => {
    //     item.pictureUrl = item.pictureUrl.map((pic: any) => pic.pictureUrl.replace(/\\/g, '/'));
    //     return item;
    //   });
    // });
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty("--theme-deafult");
  }

  getDefaultImage(glass: any): string {
    const defaultImage = glass.pictureUrl.find((img) => img.isDefault);
    return defaultImage
      ? defaultImage.pictureUrl
      : "assets/images/default-glass-image.jpg"; // Provide default image path if no default image found
  }
  addToCart(product: any) {
    let id = localStorage.getItem("id");
    if (!id) {
      id = this.generateGUID();
      localStorage.setItem("id", id);
    }
    const card = {
      id: id,
      items: [
        {
          id: product.id,
          productName: product.productName,
          price: product.price,
          quantity: 1,
          pictureUrl: product.pictureUrl[0].pictureUrl,
          category: product.category,
          brand: product.brand,
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
  addToWishlist(glass: any) {
    this.cardService.addToWishlist({ productId: glass.id }).subscribe({
      next: (res: any) => {
        this.router.navigate(["/shop/wishlist"]);
      },
    });
  }
  addToCompare(glasses: any) {
    this.productService.addToCompare(glasses);
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
