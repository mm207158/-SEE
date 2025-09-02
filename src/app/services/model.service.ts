import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  url: string = "https://amirasamir-001-site1.qtempurl.com/api/Models/";
  constructor(private http: HttpClient) {}
  applyGlass(body: any) {
    return this.http.post(this.url + "apply-glass", body);
  }
}
