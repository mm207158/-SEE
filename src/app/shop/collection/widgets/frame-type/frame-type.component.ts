import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../../../../shared/classes/product";
import { FilterService } from "src/app/services/filter.service";

@Component({
  selector: "app-frame-type",
  templateUrl: "./frame-type.component.html",
  styleUrls: ["./frame-type.component.scss"],
})
export class FrameTypeComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() frameTypes: any[] = [];

  @Output() frameTypeFilter: EventEmitter<any> = new EventEmitter<any>();

  public collapse: boolean = true;

  constructor(private filterService: FilterService) {}

  ngOnInit(): void {
    this.getFrames();
  }

  getFrames() {
    this.filterService.getFrames().subscribe({
      next: (res: any) => {
        this.frameTypes = res;
      },
    });
  }

  get filterByFrameType() {
    const uniqueFrameTypes = ["Metal", "za3bola"]; // Define your frame types here
    return uniqueFrameTypes;
  }
  _frameTypes: any[] = [];
  appliedFrameTypeFilter(event) {
    let index = this.frameTypes.indexOf(event.target.value);
    if (event.target.checked) this._frameTypes.push(event.target.value);
    else this._frameTypes.splice(index, 1);

    let frameTypes = this._frameTypes.length
      ? { frameType: this._frameTypes.join(",") }
      : { frameType: 0 };
    this.frameTypeFilter.emit(frameTypes);
  }

  checkedFrameType(item) {
    return this.frameTypes.indexOf(item) !== -1;
  }

  toggleCollapse() {
    this.collapse = !this.collapse;
  }
}
