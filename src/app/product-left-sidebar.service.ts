import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { glass } from './shared/classes/glass';

@Injectable({
  providedIn: 'root'
})
export class ProductLeftSidebarService {
  private apiUrl = 'https://amirasamir-001-site1.qtempurl.com/api/glass';

  constructor(private http: HttpClient) { }

  getAllGlasses(): Observable<glass[]> {
    return this.http.get<glass[]>(this.apiUrl);
  }

  getGlassById(id: string): Observable<glass> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<glass>(url);
  }
}