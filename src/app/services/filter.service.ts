import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FilterService {
  url: string = "https://amirasamir-001-site1.qtempurl.com/api/products/";
  constructor(private http: HttpClient) {}

  getBrands() {
    return this.http.get(this.url + "brands");
  }
  getCatogaries() {
    return this.http.get(this.url + "get-categories");
  }
  getShapes() {
    return this.http.get(this.url + "get-shapes");
  }
  getFrames() {
    return this.http.get(this.url + "get-frames");
  }
  getColors() {
    return this.http.get(this.url + "get-colors");
  }
  getGenders() {
    return this.http.get(this.url + "genders");
  }

  getGlasses(data: any) {
    return this.http.post(this.url + "glasses", data);
  }
}
