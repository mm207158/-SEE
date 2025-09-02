import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../shared/classes/product';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() brands: any[] = [];

  @Output() brandsFilter: EventEmitter<any> = new EventEmitter<any>();
  
  public collapse: boolean = true;

  constructor(private filterService:FilterService) { 
  }

  ngOnInit(): void {
    this.getBrands();
  }

  get filterbyBrand() {
    const uniqueBrands = [];
    this.products.filter((product) => {
      if (product.brand) {
        const index = uniqueBrands.indexOf(product.brand)
        if (index === -1) uniqueBrands.push(product.brand)
      }
    })
    return uniqueBrands
  }
  _brands = []
  appliedFilter(event) {
    let index = this.brands.findIndex(
      (brand) => brand.id === event.target.value
    ); // checked and unchecked value
    if (event.target.checked)   
      this._brands.push(event.target.value); // push in array cheked value
    else 
      this._brands.splice(index, 1);  // removed in array unchecked value  
    
    let brands = this._brands.length ? { brand: this._brands.join(",") } : { brand: 0 };
    this.brandsFilter.emit(brands);
  }

  // check if the item are selected
  checked(item){
    if(this.brands.indexOf(item) != -1){
      return true;
    }
  }

  getBrands() {
    this.filterService.getBrands().subscribe({
      next: (res: any) => {
        this.brands = res;
      },
    });
  }

}
