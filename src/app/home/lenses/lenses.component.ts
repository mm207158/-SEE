import { Component, OnInit, OnDestroy, Input, ViewChild  } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductSlider, CollectionSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';
import { LensesService } from 'src/app/lenses.service';
import { CartModalComponent } from 'src/app/shared/components/modal/cart-modal/cart-modal.component';
import { QuickViewComponent } from 'src/app/shared/components/modal/quick-view/quick-view.component';


@Component({
  selector: 'app-lenses',
  templateUrl: './lenses.component.html',
  styleUrls: ['./lenses.component.scss']
})
export class lenses implements OnInit, OnDestroy {
  
 
  lenses: any[] = [];
  @Input() cartModal: boolean = false; // Default False

  @ViewChild("cartModal") CartModal: CartModalComponent;
  @ViewChild("quickView") QuickView: QuickViewComponent;
  public themeLogo: string = 'assets/images/icon/logo-14.png'; // Change Logo
  
  public products: Product[] = [];
  public productCollections: any[] = [];

  public ProductSliderConfig: any = ProductSlider;
  public CollectionSliderConfig: any = CollectionSlider;
  public active;
  constructor(private _sanitizer:DomSanitizer,
    public productService: ProductService,private lensesService: LensesService ) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'lenses');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  public sliders = [{
    title: 'Men lenses',
    subTitle: 'Eye lenses',
    image: 'assets/images/slider/1.png'
  }, {
    title: 'Women lenses',
    subTitle: 'Eye lenses',
    image: 'assets/images/slider/2.png'
  }];


  // Collection
  public categories = [ {
    image: 'assets/images/categories/14.jpg',
    title: 'men lenses',
  }, {
    image: 'assets/images/categories/15.jpg',
    title: 'women lenses',
  }, {
    image: 'assets/images/categories/16.jpg',
    title: 'kid lenses',
  }, ]

  // collection
  public collections = [{
    image: 'assets/images/collection/lenses/1.jpg',
    title: 'minimum 10% off',
    text: 'new lenses'
  }, {
    image: 'assets/images/collection/lenses/2.jpg',
  }, {
    image: 'assets/images/collection/lenses/3.jpg',
    title: 'minimum 10% off',
    text: 'gold lenses`'
  }]

  ngOnInit(): void {

    this.lensesService.getLenses().subscribe((data: any) => {
      this.lenses = data.items.map((item: any) => {
        item.pictureUrl = item.pictureUrl.map((pic: any) => pic.pictureUrl.replace(/\\/g, '/'));
        return item;
      });
    });
    // // Change color for this layout
    // document.documentElement.style.setProperty('--theme-deafult', '#e4604a');
  }
  getDefaultImage(lense: any): string {
    const defaultImage = lense.pictureUrl.find(img => img.isDefault);
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
  addToCart(lenses: any) {
    this.productService.addToCart(lenses);
  }

  addToWishlist(lenses: any) {
    this.productService.addToWishlist(lenses);
  }
  addToCompare(lenses: any) {
    this.productService.addToCompare(lenses);
  }
 
}
