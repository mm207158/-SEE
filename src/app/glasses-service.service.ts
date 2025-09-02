import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlassesService {
  url: string = "https://amirasamir-001-site1.qtempurl.com/api/Products/";

  constructor(private http: HttpClient) { }

  getGlasses() {
    return this.http.get(this.url + "glasses-mobile?pageIndex=1&pageSize=10");

  }
  getGlassesbyid(id:any) {
    return this.http.get('https://amirasamir-001-site1.qtempurl.com/api/Products/glass/'+id);
  }
}