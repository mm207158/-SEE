import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; // Import Router
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute



@Component({
  selector: 'app-vision-test-result',
  templateUrl: './vision-test-result.component.html',
  styleUrls: ['./vision-test-result.component.css']
})
export class VisionTestResultComponent implements OnInit {
  correctAnswers: number = 0;
  totalQuestions: number = 0;
  percentage:number =0
  maxScore: number = 6;
  resultFraction: string = '';
  sightCondition: string = '';


  
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { correctAnswers: number, totalQuestions: number };
    if (state) {
      this.correctAnswers = state.correctAnswers;
      this.totalQuestions = state.totalQuestions;
      this.percentage = +(this.correctAnswers / this.totalQuestions * 100).toFixed(1);    }
      const num = Math.round(this.percentage / 100 * this.maxScore);
      this.resultFraction = `${num}/${this.maxScore}`;
      if (this.resultFraction === '6/6') {
        this.sightCondition = "You have no weakness of sight.";
      } else {
        this.sightCondition = "You have weakness of sight.";
      }

  }

  ngOnInit(): void { }

  calculateFraction(correctAnswers: number, maxScore: number): string {
    const score = Math.min(correctAnswers, maxScore); // Ensure the score doesn't exceed the maxScore
    return `${score}/${maxScore}`;
  }
}