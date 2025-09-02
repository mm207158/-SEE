import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessoriesService {

  url: string = "https://amirasamir-001-site1.qtempurl.com/api/Products/";
  constructor(private http: HttpClient) { }
  
  getAccessory() {
    return this.http.get(this.url + "accessories-mobile");
  }

  getAccessorybyid(id:any) {
    return this.http.get(this.url + 'accessory'+id);

    // return this.http.get('https://amirasamir-001-site1.qtempurl.com/api/Products/accessory/'+id);
  }
}
