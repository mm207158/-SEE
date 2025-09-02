import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { log } from "console";
import { ModelService } from "src/app/services/model.service";
import { TryOnPhotoService } from "src/app/try-on-photo.service";

@Component({
  selector: "app-try-on-photo",
  templateUrl: "./try-on-photo.component.html",
  styleUrls: ["./try-on-photo.css"],
})
export class Tryonphoto implements OnInit {
  selectedPhoto: File;
  productImageId: string = "";
  imageData: Uint8Array;
  status: AuthStatus = AuthStatus.Idle;
  errorMessage: string = ""; // Define errorMessage property

  constructor(
    private tryOnPhotoService: TryOnPhotoService,
    private route: ActivatedRoute,
    private modelService: ModelService
  ) {}
  id = this.route.snapshot.params["imageId"];
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.productImageId = params["imageId"]; // Retrieve productImageId from query parameters
      console.log("Product ImageId:", this.productImageId);
      // Now you have access to the productImageId in this component
    });
    this.checkAndApplyGlass();
  }

  checkAndApplyGlass(): void {
    const fileInput = document.getElementById(
      "upload-photo"
    ) as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const faceImage: File = fileInput.files[0];

      // Call the applyGlassToPhoto method directly
      this.applyGlassToPhoto(faceImage, this.productImageId);
    }
  }

  applyGlassToPhoto(faceImage: File, glassImageId: string): void {
    const formData = new FormData();
    formData.append("FaceImage", faceImage); // Use 'FaceImage' as the field name for the uploaded photo
    formData.append("GlassImageId", glassImageId); // Use 'GlassImageId' as the field name for the glass image ID

    console.log("Request:", formData); // Log the request

    this.tryOnPhotoService.applyGlass(faceImage, glassImageId).subscribe({
      next: (result: Uint8Array) => {
        // Handle success here
        console.log("Success", result);
        this.status = AuthStatus.Success;
        this.imageData = result;
        console.log("Response from the API:", result);
      },
      error: (error: any) => {
        // Handle error here
        console.error("Error", error);
        this.status = AuthStatus.Failure;
        // Display the error message to the user
        // For example, you can set a property to display an error message in the HTML template
        this.errorMessage = error.ErrorMessage || "Internal Server Error";
      },
    });
  }
  uploadPhoto(): void {
    if (this.selectedPhoto && this.productImageId) {
      console.log("Uploading photo to the endpoint:", this.selectedPhoto);
      this.status = AuthStatus.Loading;
      this.applyGlassToPhoto(this.selectedPhoto, this.productImageId);
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedPhoto = file;
    }
  }
  file: any;
 

  triggerFileInput(): void {
    document.getElementById("upload-photo").click();
  }
  image:any;
  applyGlass(event: any) {
    console.log(111);
    
    this.file = event.target.files[0];
    const data = new FormData();
    data.append("GlassImageId", this.productImageId);
    data.append("FaceImage", this.file);
    console.log(data);
    
    this.modelService.applyGlass(data).subscribe({
      next: (res: any) => {
        this.image = res;
      },
    });
  }
}

export enum AuthStatus {
  Idle = "Idle",
  Loading = "Loading",
  Success = "Success",
  Failure = "Failure",
}
