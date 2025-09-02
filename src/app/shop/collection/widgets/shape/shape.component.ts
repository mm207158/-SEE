import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../shared/classes/product';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() shapes: any[] = [];

  @Output() shapeFilter: EventEmitter<any> = new EventEmitter<any>();
  
  public collapse: boolean = true;

  constructor(private filterService:FilterService) { }

  ngOnInit(): void { 
    this.getShapes();
  }
  getShapes() {
    this.filterService.getShapes().subscribe({
      next: (res: any) => {
        this.shapes = res;
      },
    });
  }

  get filterbyShape() {
    const uniqueShapes = ['Circle', 'Oval', 'Square'];
    return uniqueShapes;
  }
  _shapes: any[]=[];
  appliedShapeFilter(event) {
    let index = this.shapes.indexOf(event.target.value);  // checked and unchecked value
    if (event.target.checked)   
      this._shapes.push(event.target.value); // push in array cheked value
    else 
      this._shapes.splice(index,1);  // removed in array unchecked value  
    
    let shapes = this._shapes.length ? { shape: this._shapes.join(",") } : { shape: 0 };
    this.shapeFilter.emit(shapes);
  }

  // check if the item is selected
  checked(item){
    return this.shapes.indexOf(item) !== -1;
  }
}