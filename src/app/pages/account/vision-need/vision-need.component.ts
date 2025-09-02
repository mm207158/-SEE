import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NavigationEnd, Router } from '@angular/router';
import { ProductDetailsMainSlider, ProductDetailsThumbSlider } from '../../../shared/data/slider';
import { ProductSlider } from '../../../shared/data/slider'; 

import { Product } from 'src/app/shared/classes/product';
import { ProductService } from 'src/app/shared/services/product.service';
import { glass } from 'src/app/shared/classes/glass';
import { GlassesService } from 'src/app/glasses-service.service';


@Component({
  selector: 'app-vision-need',
  templateUrl: './vision-need.component.html',
  styleUrls: ['./vision-need.css']
})

export class Visionneed implements OnInit {
  public url: any;
  selectedPhoto: any;
  public ProductSliderConfig: any = ProductSlider;
  public products: Product[] = [];
  public product: Product = {};
  public productCollections: any[] = [];
  id: any;
  public ImageSrc : string;
  // public images: any[] = [ 
  //   { src: './assets/images/product/fashion/1.png', alt: 'Image 1' },
  //   { },
   
  // ];

  constructor(private route: ActivatedRoute, private router: Router,
    public productService: ProductService ,private glass:GlassesService) {
    this.route.data.subscribe(response => this.product = response.data);
    this.productService.getProducts.subscribe(response => {
      this.products = response.filter(item => item.type == 'glasses');
      // Get Product Collection
      this.products.filter((item) => {
        item.collection.filter((collection) => {
          const index = this.productCollections.indexOf(collection);
          if (index === -1) this.productCollections.push(collection);
        })
      })
    });
  }

  ngOnInit(): void {
    this.getglassbyid();

  }


  getglassbyid() {
    console.log(this.id);
    this.glass.getGlassesbyid(this.id).subscribe({
      next: (product: any) => {
        this.product = product;
        console.log(product);
      },
    });
  }
  choosePhoto() {
    document.getElementById('upload-photo').click();
  }

  displayPhoto(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        this.selectedPhoto = reader.result;
      };

      reader.readAsDataURL(file);
    }
  }
}