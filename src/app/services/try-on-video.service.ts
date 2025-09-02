import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TryOnVideoService {

  constructor(private http: HttpClient) { }

  applyGlassesToVideo(videoFile: File, imageId: string): Observable<Blob> {
    const url = 'https://amirasamir-001-site1.qtempurl.com/api/Models/apply-video';

    const formData: FormData = new FormData();
    formData.append('videoFile', videoFile, videoFile.name);
    formData.append('ImageId', imageId);

    const headers = new HttpHeaders();
    headers.append('Accept', 'application/octet-stream');

    return this.http.post(url, formData, { headers: headers, responseType: 'blob' })
      .pipe(
        catchError(error => {
          console.error('Failed to apply glasses to video.', error);
          return throwError('Failed to apply glasses to video.');
        })
      );
  }
}
