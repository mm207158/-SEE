import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LensesService {

  constructor(private http: HttpClient) { }
  
  getLenses() {
    return this.http.get('https://amirasamir-001-site1.qtempurl.com/api/Products/lenses-mobile?pageindex=1&paageSize=10');
  }
  getLensesbyid(id:any) {
    return this.http.get('https://amirasamir-001-site1.qtempurl.com/api/Products/lense/'+id);
  }
}
