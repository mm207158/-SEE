import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-vision-test',
  templateUrl: './vision-test.component.html',
  styleUrls: ['./vision-test.component.css']
})
export class VisionTestComponent implements OnInit {
  images: {src: string, direction: string}[] = [
    //Extra Big
    { src: 'assets/images/Vision test/Extra big/Extra big Down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Extra big/Extra big up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Extra big/Extra big Left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Extra big/Extra big Right.png', direction: 'right' },
    // Big
    { src: 'assets/images/Vision test/Big/big down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Big/big Up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Big/big Left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Big/big right.png', direction: 'right' },
    //Medium
    { src: 'assets/images/Vision test/Medium/medium down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Medium/medium Up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Medium/medium Left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Medium/medium Right.png', direction: 'right' },
    //Small
    { src: 'assets/images/Vision test/Small/small down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Small/small Up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Small/small left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Small/small right.png', direction: 'right' },
    //Extra Small
    { src: 'assets/images/Vision test/Extra Small/Extra small down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Extra Small/Extra small up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Extra Small/Extra small left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Extra Small/Extra small right.png', direction: 'right' },
    //Extra Extra Small
    { src: 'assets/images/Vision test/Extra Extra Small/Extra extra small down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Extra Extra Small/Extra extra small UP.png', direction: 'up' },
    { src: 'assets/images/Vision test/Extra Extra Small/Extra extra small left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Extra Extra Small/Extra extra small right.png', direction: 'right' },
    { src: 'assets/images/Vision test/Super Extra extra small right.png', direction: 'up' },

    // Add more images with directions as needed

    //Second Eye
    //Extra Big
    { src: 'assets/images/Vision test/Extra big/Extra big Down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Extra big/Extra big up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Extra big/Extra big Left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Extra big/Extra big Right.png', direction: 'right' },
    // Big
    { src: 'assets/images/Vision test/Big/big down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Big/big Up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Big/big Left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Big/big right.png', direction: 'right' },
    //Medium
    { src: 'assets/images/Vision test/Medium/medium down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Medium/medium Up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Medium/medium Left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Medium/medium Right.png', direction: 'right' },
    //Small
    { src: 'assets/images/Vision test/Small/small down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Small/small Up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Small/small left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Small/small right.png', direction: 'right' },
    //Extra Small
    { src: 'assets/images/Vision test/Extra Small/Extra small down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Extra Small/Extra small up.png', direction: 'up' },
    { src: 'assets/images/Vision test/Extra Small/Extra small left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Extra Small/Extra small right.png', direction: 'right' },
    //Extra Extra Small
    { src: 'assets/images/Vision test/Extra Extra Small/Extra extra small down.png', direction: 'down' },
    { src: 'assets/images/Vision test/Extra Extra Small/Extra extra small UP.png', direction: 'up' },
    { src: 'assets/images/Vision test/Extra Extra Small/Extra extra small left.png', direction: 'left' },
    { src: 'assets/images/Vision test/Extra Extra Small/Extra extra small right.png', direction: 'right' },
    { src: 'assets/images/Vision test/Super Extra extra small right.png', direction: 'up' },

    // Add more images with directions as needed
  ];
  currentImageIndex: number = 0;
  correctAnswers: number = 0;
  totalQuestions: number = 50; // Update to reflect total number of questions

  constructor(private router: Router) { }

  ngOnInit(): void { }

  nextImage(selectedDirection: string): void {
    if (this.images[this.currentImageIndex].direction === selectedDirection) {
      this.correctAnswers++;
    }
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.totalQuestions) {
      this.showResults();
    }
  }

  showResults(): void {
    this.router.navigate(['/pages/vision-test-result'], { state: { correctAnswers: this.correctAnswers, totalQuestions: this.totalQuestions } });
  }
}
