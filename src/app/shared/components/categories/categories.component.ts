import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "../../classes/product";
import { ProductService } from "../../services/product.service";
import { FilterService } from "src/app/services/filter.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent implements OnInit {
  public products: Product[] = [];
  categories: any[] = [];
  public collapse: boolean = true;
  @Output() categoriesFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public productService: ProductService,
    private filterService: FilterService
  ) {
    this.productService.getProducts.subscribe(
      (product) => (this.products = product)
    );
  }

  ngOnInit(): void {
    this.getCategories();
  }

  get filterbyCategory() {
    const category = [...new Set(this.products.map((product) => product.type))];
    return category;
  }
  getCategories() {
    this.filterService.getCatogaries().subscribe({
      next: (res: any) => {
        this.categories = res;
      },
    });
  }
  _categories: any[] = [];
  appliedFilter(event) {
    let index = this.categories.indexOf(event.target.value);
    if (event.target.checked) this._categories.push(event.target.value);
    else this._categories.splice(index, 1);

    let categories = this._categories.length
      ? { category: this._categories.join(",") }
      : { category: 0 };
    this.categoriesFilter.emit(categories);
  }

  checked(item) {
    return this.categories.indexOf(item) !== -1;
  }
}
