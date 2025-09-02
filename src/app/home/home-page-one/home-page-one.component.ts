import { Component, OnInit } from '@angular/core';
import { ProductSlider } from 'src/app/shared/data/slider';
import { Product } from 'src/app/shared/classes/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page-one.component.html',
  styleUrls: ['./home-page-one.component.scss']
})
export class HomePageOneComponent implements OnInit {

  public products: Product[] = [];
  public productCollections: any[] = [];
  public active;

  constructor(public productService: ProductService) {
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'fashion');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  public ProductSliderConfig: any = ProductSlider;
  isHovered: boolean = false;

  addHoverClass() {
    this.isHovered = true;
  }

  removeHoverClass() {
    this.isHovered = false;
  }
  public sliders = [{
    title: 'welcome to ',
    subTitle: 'Men Glasses',
    image: 'assets/images/slider/1.png'
  }, {
    title: 'welcome to',
    subTitle: 'Women Glasses',
    image: 'assets/images/slider/2.png'
  }]

  // Collection banner
  public collections = [{
    image: 'assets/images/collection/fashion/1.png',
    save: 'save 50%',
    title: 'men'
  }, {
    image: 'assets/images/collection/fashion/2.png',
    save: 'save 50%',
    title: 'women'
  }];

  // Logo
  public logo = [{
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
