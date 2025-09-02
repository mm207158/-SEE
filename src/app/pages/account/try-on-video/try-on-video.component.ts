import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { TryOnVideoService } from 'src/app/services/try-on-video.service';

@Component({
  selector: 'app-try-on-video',
  templateUrl: './try-on-video.component.html',
  styleUrls: ['./try-on-video.css']
})
export class Tryonvideo implements OnInit {
  public url: any;
  selectedVideo: File;
  imageId: string = ""; // UUID for the glasses image
  videoUrl: string;
  status: AuthStatus = AuthStatus.Idle;
  errorMessage: string = '';
  @ViewChild('videoPlayer') videoPlayer: ElementRef;

  constructor(private router: Router, private route: ActivatedRoute, private tryOnVideoService: TryOnVideoService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.imageId = params['imageId']; // Retrieve imageId from query parameters
      console.log('Image ID:', this.imageId);
    });
  }

  triggerFileInput(): void {
    document.getElementById('upload-video').click();
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedVideo = file;
      this.applyGlassesToVideo();
    }
  }

  applyGlassesToVideo(): void {
    if (this.selectedVideo && this.imageId) {
      this.status = AuthStatus.Loading;

      this.tryOnVideoService.applyGlassesToVideo(this.selectedVideo, this.imageId).subscribe({
        next: (response: Blob) => {
          this.status = AuthStatus.Success;
          this.downloadFile(response, 'video-with-glasses.mp4');
          console.log("Success");
        },
        error: (error: any) => {
          console.error('Error', error);
          this.status = AuthStatus.Failure;
          this.errorMessage = error.ErrorMessage || 'Internal Server Error';
        }
      });
    }
  }

  downloadFile(data: Blob, filename: string) {
    const blob = new Blob([data], { type: 'video/mp4' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
  }
}

export enum AuthStatus {
  Idle = 'Idle',
  Loading = 'Loading',
  Success = 'Success',
  Failure = 'Failure',
}
