import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../../../shared/classes/product";
import { FilterService } from "src/app/services/filter.service";

@Component({
  selector: "app-colors",
  templateUrl: "./colors.component.html",
  styleUrls: ["./colors.component.scss"],
})
export class ColorsComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() colors: any[] = [];

  @Output() colorsFilter: EventEmitter<any> = new EventEmitter<any>();

  public collapse: boolean = true;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.getColors();
  }
  getColors() {
    this.filterService.getColors().subscribe({
      next: (res: any) => {
        this.colors = res;
      },
    });
  }

  get filterbycolor() {
    const uniqueColors = [];
    this.products.filter((product) => {
      product.variants.filter((variant) => {
        if (variant.color) {
          const index = uniqueColors.indexOf(variant.color);
          if (index === -1) uniqueColors.push(variant.color);
        }
      });
    });
    return uniqueColors;
  }
  _colors: any[] = [];
  appliedFilter(event) {
    let index = this.colors.findIndex(
      (color) => color.id === event.target.value
    ); // checked and unchecked value
    if (event.target.checked)
      this._colors.push(event.target.value); // push in array cheked value
    else this._colors.splice(index, 1); // removed in array unchecked value

    let colors = this._colors.length
      ? { color: this._colors.join(",") }
      : { color: 0 };
    this.colorsFilter.emit(colors);
  }

  // check if the item are selected
  checked(item) {
    if (this.colors.indexOf(item) != -1) {
      return true;
    }
  }
}
