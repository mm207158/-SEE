import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../shared/classes/product';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.scss']
})
export class GenderComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() genders: any[] = [];

  @Output() genderFilter: EventEmitter<any> = new EventEmitter<any>();
  
  public collapse: boolean = true;

  constructor(private filterService:FilterService) { }

  ngOnInit(): void { 
    this.getGenders();
  }
  getGenders() {
    this.filterService.getGenders().subscribe({
      next: (res: any) => {
        this.genders = res;
      },
    });
  }

  get filterbyGender() {
    const uniqueGenders = ['Men', 'Women','Kids'];
    return uniqueGenders;
  }
  _genders: any[]=[]
  appliedGenderFilter(event) {
    let index = this.genders.indexOf(event.target.value);
    if (event.target.checked)
      this._genders.push(event.target.value);
    else
      this._genders.splice(index, 1);
    
    let genders = this._genders.length ? { gender: this._genders.join(",") } : { gender: 0 };
    this.genderFilter.emit(genders);
  }

  checked(item) {
    return this.genders.indexOf(item) !== -1;
  }
}
