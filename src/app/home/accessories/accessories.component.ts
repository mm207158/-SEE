import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { CategorySlider, ProductSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';
import { AccessoriesService } from 'src/app/accessories.service';
import { CartModalComponent } from 'src/app/shared/components/modal/cart-modal/cart-modal.component';
import { QuickViewComponent } from 'src/app/shared/components/modal/quick-view/quick-view.component';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class accessories implements OnInit, OnDestroy {
  accessories: any[] = []; // Added this property to hold the accessories data
  @Input() cartModal: boolean = false; // Default False

  @ViewChild("cartModal") CartModal: CartModalComponent;
  @ViewChild("quickView") QuickView: QuickViewComponent;
  public themeLogo: string = 'assets/images/icon/logo-6.png'; // Change Logo

  public products: Product[] = [];
  public productCollections: any[] = [];
  public active;

  public CategorySliderConfig: any = CategorySlider;
  public ProductSliderConfig: any = ProductSlider;

  constructor(public productService: ProductService,private accessoriesService: AccessoriesService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'accessories');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  // sliders
  public sliders = [{
    title: 'special offer',
    subTitle: 'men accessories',
    image: 'assets/images/slider/1.png'
  }, {
    title: 'special offer',
    subTitle: 'women accessories',
    image: 'assets/images/slider/2.png'
  }];



  // // Categories
  // public categories = [{
  //   image: 'assets/images/icon/cat1.png',
  //   title: 'men accessories'
  // }, {
  //   image: 'assets/images/icon/cat2.png',
  //   title: 'women accessories'
  // }, {
  //   image: 'assets/images/icon/cat3.png',
  //   title: 'kids accessories'
  // }];

  // Collection banner


  // Collection banner
  public collections2 = [{
    image: 'assets/images/categories/14.jpg',
    title: 'men'
  }, {
    image: 'assets/images/categories/15.jpg',
    title: 'women'
  }, {
    image: 'assets/images/categories/16.jpg',
    title: 'kids'
  }];

  
  // Logo
  public logos = [{
    image: 'assets/images/logos/1.png',
  }, {
    image: 'assets/images/logos/2.png',
  }, {
    image: 'assets/images/logos/3.png',
  }, {
    image: 'assets/images/logos/4.png',
  }, {
    image: 'assets/images/logos/5.png',
  }, {
    image: 'assets/images/logos/6.png',
  }, {
    image: 'assets/images/logos/7.png',
  }, {
    image: 'assets/images/logos/8.png',
  }];

  ngOnInit(): void {

    this.accessoriesService.getAccessory().subscribe((data: any) => {
      this.accessories = data.items.map((item: any) => {
        item.pictureUrl = item.pictureUrl.map((pic: any) => pic.pictureUrl.replace(/\\/g, '/'));
        return item;
      });
    });
    // // Change color for this layout
    // document.documentElement.style.setProperty('--theme-deafult', '#e4604a');
  }
  getDefaultImage(accessories: any): string {
    const defaultImage = accessories.pictureUrl.find(img => img.isDefault);
    return defaultImage ? defaultImage.pictureUrl : 'assets/images/default-glass-image.jpg'; // Provide default image path if no default image found
  }

  ngOnDestroy(): void {
    // Remove Color
    document.documentElement.style.removeProperty('--theme-deafult');
  }

  // Product Tab collection
  getCollectionProducts(collection) {
    return this.products.filter((item) => {
      if (item.collection.find(i => i === collection)) {
        return item
      }
    })
  }

  addToCart(accessories: any) {
    this.productService.addToCart(accessories);
  }

  addToWishlist(accessories: any) {
    this.productService.addToWishlist(accessories);
  }
  addToCompare(accessories: any) {
    this.productService.addToCompare(accessories);
  }

}
