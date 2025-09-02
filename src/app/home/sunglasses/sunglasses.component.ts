import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductSlider, CollectionSlider } from '../../shared/data/slider';
import { Product } from '../../shared/classes/product';
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-sunglasses',
  templateUrl: './sunglasses.component.html',
  styleUrls: ['./sunglasses.component.scss']
})
export class sunglasses implements OnInit, OnDestroy {

  public themeLogo: string = 'assets/images/icon/logo-14.png'; // Change Logo
  
  public products: Product[] = [];
  public productCollections: any[] = [];

  public ProductSliderConfig: any = ProductSlider;
  public CollectionSliderConfig: any = CollectionSlider;
  public active;

  constructor(private _sanitizer:DomSanitizer,
    public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'sunglasses');
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
    title: 'Men Glasses',
    subTitle: 'Sun-Glasses',
    image: 'assets/images/slider/1.png'
  }, {
    title: 'Women Glasses',
    subTitle: 'Sun-Glasses',
    image: 'assets/images/slider/2.png'
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

  public categories = [ {
    image: 'assets/images/categories/14.jpg',
    title: 'men glasses',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Shock-resistant glasses</a></li><li><a href="#">Skeleton glasses</a></li><li><a href="#">Slow glasses</a></li><li><a href="#">Solar-powered glasses</a></li>'),
  }, {
    image: 'assets/images/categories/15.jpg',
    title: 'women glasses',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">glassesmaking conglomerates</a></li><li><a href="#">Breitling SA</a></li><li><a href="#">Casio glasseses</a></li><li><a href="#">Citizen glasses</a></li>'),
  }, {
    image: 'assets/images/categories/16.jpg',
    title: 'kid glasses',
    text:  this._sanitizer.bypassSecurityTrustHtml('<li><a href="#">Manufacture dhorlogerie</a></li><li><a href="#">Mechanical glasses</a></li><li><a href="#">Microbrand glasseses</a></li><li><a href="#">MIL-W-46374</a></li>'),
  }, ]

  // collection
  public collections = [{
    image: 'assets/images/collection/sunglasses/1.jpg',
    title: 'minimum 10% off',
    text: 'new sunglasses'
  }, {
    image: 'assets/images/collection/sunglasses/2.jpg',
  }, {
    image: 'assets/images/collection/sunglasses/3.jpg',
    title: 'minimum 10% off',
    text: 'gold sunglasses`'
  }]

   // Blog
  public blogs = [{
    image: 'assets/images/blog/10.jpg',
    date: '25 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/11.jpg',
    date: '26 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/12.jpg',
    date: '27 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }, {
    image: 'assets/images/blog/13.jpg',
    date: '28 January 2018',
    title: 'Lorem ipsum dolor sit consectetur adipiscing elit,',
    by: 'John Dio'
  }]

  ngOnInit(): void {
    // Change color for this layout
    document.documentElement.style.setProperty('--theme-deafult', '#e4604a');
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

}
