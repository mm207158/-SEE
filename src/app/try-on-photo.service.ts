import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TryOnPhotoService {

  constructor(private http: HttpClient) { }

  applyGlass(faceImage: File, glassImageId: string): Observable<Uint8Array> {
    const url = 'https://amirasamir-001-site1.qtempurl.com/api/Models/apply-glass';

    const formData: FormData = new FormData();
    formData.append('FaceImage', faceImage, 'Omar.jpg');
    formData.append('GlassImageId', glassImageId);

    const headers = new HttpHeaders();
    headers.append('Accept', '/');

    return this.http.post(url, formData, { headers: headers, responseType: 'arraybuffer' })
      .pipe(
        catchError(error => {
          console.error('Failed to apply glass.', error);
          return throwError('Failed to apply glass.');
        })
      )
      .pipe(map((res: ArrayBuffer) => new Uint8Array(res)));
  }
}