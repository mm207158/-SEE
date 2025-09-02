import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ViewportScroller } from "@angular/common";
import { ProductService } from "../../../shared/services/product.service";
import { Product } from "../../../shared/classes/product";
import { FilterService } from "src/app/services/filter.service";

@Component({
  selector: "app-collection-left-sidebar",
  templateUrl: "./collection-left-sidebar.component.html",
  styleUrls: ["./collection-left-sidebar.component.scss"],
})
export class CollectionLeftSidebarComponent implements OnInit {
  public grid: string = "col-xl-3 col-md-6";
  public layoutView: string = "grid-view";
  public products: Product[] = [];
  public brands: any[] = null;
  public colors: any[] = null;
  public size: any[] = null;
  public minPrice: number = 0;
  public maxPrice: number = 1200;
  public tags: any[] = [];
  public categories: any[] = null;
  public pageNo: number = 1;
  public paginate: any = {}; // Pagination use only
  public sortBy: string; // Sorting Order
  public mobileSidebar: boolean = false;
  public loader: boolean = true;
  public shapes: any[] = null; // Define shapes array
  public genders: any[] = null;
  public frameTypes: any[] = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller,
    public productService: ProductService,
    private filterService:FilterService
  ) {

  }

  ngOnInit(): void {}

  // Append filter value to Url
  updateFilter(tags: any) {
    tags.page = null; // Reset Pagination
  
    this.categories = tags.category ? tags.category.split(",") : tags.category == 0 ? null : this.categories;
    this.brands = tags.brand ? tags.brand.split(",") : tags.brand == 0 ? null : this.brands;
    this.colors = tags.color ? tags.color.split(",") : tags.color == 0 ? null : this.colors;
    this.shapes = tags.shape ? tags.shape.split(",") : tags.shape == 0 ? null : this.shapes;
    this.frameTypes = tags.frameType ? tags.frameType.split(",") : tags.frameType == 0 ? null : this.frameTypes;
    this.genders = tags.gender ? tags.gender.split(",") : tags.gender == 0 ? null : this.genders;
    this.size = tags.size ? tags.size.split(",") : tags.size == 0 ? null : this.size;
    this.minPrice = tags.minPrice ? tags.minPrice : this.minPrice;
    this.maxPrice = tags.maxPrice ? tags.maxPrice : this.maxPrice;

    const data = {
      categoryIds: this.categories,
      brandIds: this.brands,
      colorsIds: this.colors,
      shapeIds: this.shapes,
      frameTypeIds: this.frameTypes,
      frameSizes: this.size,
      gendersId: this.genders,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice
    }
    this.filterService.getGlasses(data).subscribe({
      next: (res: any) => {
        this.products = res.items;
        console.log(res.items);
      },
    });
    // this.tags = [...this.brands, ...this.colors, ...this.size]; // All Tags Array
  }

  // SortBy Filter
  sortByFilter(value) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { sortBy: value ? value : null },
        queryParamsHandling: "merge", // preserve the existing query params in the route
        skipLocationChange: false, // do trigger navigation
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor("products"); // Anchore Link
      });
  }

  // Remove Tag
  removeTag(tag) {
    this.brands = this.brands.filter((val) => val !== tag);
    this.colors = this.colors.filter((val) => val !== tag);
    this.size = this.size.filter((val) => val !== tag);
    this.genders = this.genders.filter((val) => val !== tag);

    let params = {
      brand: this.brands.length ? this.brands.join(",") : null,
      color: this.colors.length ? this.colors.join(",") : null,
      size: this.size.length ? this.size.join(",") : null,
    };

    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: params,
        queryParamsHandling: "merge", // preserve the existing query params in the route
        skipLocationChange: false, // do trigger navigation
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor("products"); // Anchore Link
      });
  }

  // Clear Tags
  removeAllTags() {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: {},
        skipLocationChange: false, // do trigger navigation
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor("products"); // Anchore Link
      });
  }

  // product Pagination
  setPage(page: number) {
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams: { page: page },
        queryParamsHandling: "merge", // preserve the existing query params in the route
        skipLocationChange: false, // do trigger navigation
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor("products"); // Anchore Link
      });
  }

  // Change Grid Layout
  updateGridLayout(value: string) {
    this.grid = value;
  }

  // Change Layout View
  updateLayoutView(value: string) {
    this.layoutView = value;
    if (value == "list-view") this.grid = "col-lg-12";
    else this.grid = "col-xl-3 col-md-6";
  }

  // Mobile sidebar
  toggleMobileSidebar() {
    this.mobileSidebar = !this.mobileSidebar;
  }


  getDefaultImage(glass: any): string {
    const defaultImage = glass.pictureUrl.find((img) => img.isDefault);
    return defaultImage
      ? defaultImage.pictureUrl
      : "assets/images/default-glass-image.jpg"; // Provide default image path if no default image found
  }
}
