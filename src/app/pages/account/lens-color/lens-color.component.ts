import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationEnd, Router } from '@angular/router';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from '../../../shared/data/slider';
import { ProductSlider } from '../../../shared/data/slider'; 
import { Product } from 'src/app/shared/classes/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { LensesService } from 'src/app/lenses.service';

@Component({
  selector: 'app-Prescription-one',
  templateUrl: './lens-color.component.html',
  styleUrls: ['./lens-color.css']
})

export class lenscolor implements OnInit {
  public url: any;
  selectedPhoto: any;
  public counter: number = 1;
  public ProductSliderConfig: any = ProductSlider;
  public products: Product[] = [];
  public product: Product = {};
  public productCollections: any[] = [];
  lenses: any[] = [];
  selectedOption: string = ''; // To keep track of the selected option

  constructor(private route: ActivatedRoute, private router: Router,
              public productService: ProductService, private lensesService: LensesService) {
    this.route.data.subscribe(response => this.product = response.data);
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'glasses');
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        });
      });
    });
  }

  ngOnInit(): void {
    this.lensesService.getLenses().subscribe((data: any) => {
      this.lenses = data.items.map((item: any) => {
        item.pictureUrl = item.pictureUrl.map((pic: any) => pic.pictureUrl.replace(/\\/g, '/'));
        return item;
      });
    });
  }

  selectOption(selectedClass: string): void {
    this.selectedOption = selectedClass; // Set the selected option
  }
}
