import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router'; // Import Router
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute



@Component({
  selector: 'app-vision-test-start-two',
  templateUrl: './vision-test-start-two.component.html',
  styleUrls: ['./vision-test-start-two.component.css']
})
export class VisionTestStartTwoComponent implements OnInit {
 
  currentImageIndex: number = 0;
  correctAnswers: number = 0;
  totalQuestions: number = 25;

  constructor(private router: Router) { }

  ngOnInit(): void { }

    

  
}