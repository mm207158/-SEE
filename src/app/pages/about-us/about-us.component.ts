import { Component, OnInit } from '@angular/core';
import { TeamSlider, TestimonialSlider } from '../../shared/data/slider';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public TeamSliderConfig: any = TeamSlider;
  public TestimonialSliderConfig: any = TestimonialSlider;

  // Testimonial Carousel
  public testimonial = [{
    image: 'assets/images/testimonial/3.jpg',
    name: 'AbdelRahman',
    designation: 'Team Leader, Backend-Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }, {
    image: 'assets/images/testimonial/2.jpeg',
    name: 'Omar Mostafa',
    designation: 'Mobile-App Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  }, {
    image: 'assets/images/testimonial/1.jpg',
    name: 'Mohamed Sobhi',
    designation: 'Frontend Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
  },  {
    image: 'assets/images/team/4.jpg',
    name: 'Fadi Waleed',
    designation: 'Backend-Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
  }, {
    image: 'assets/images/testimonial/5.jpeg',
    name: 'Febi Dawood',
    designation: 'AI Developer',
    description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
 }, {
  image: 'assets/images/testimonial/4.jpeg',
  name: 'Mariam Mahmoud',
  designation: 'Mobile-App Developer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
}, {
  image: 'assets/images/testimonial/6.jpeg',
  name: 'Marwa',
  designation: 'UI Developer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
}, {
  image: 'assets/images/testimonial/7.jpeg',
  name: 'Yassmine',
  designation: 'Frontend Developer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.'
}


]

  // Team 
  public team = [{
    image: 'assets/images/testimonial/3(1).jpg',
    name: 'AbdelRahman',
    designation: 'Team Leader, Backend-Developer'
  }, {
    image: 'assets/images/testimonial/1(1).jpg',
    name: 'Mohamed Sobhi',
    designation: 'Frontend Developer'
  }, {
    image: 'assets/images/testimonial/2(1).jpeg',
    name: 'Omar Mostafa',
    designation: 'Mobile-App Developer'
  }, {
    image: 'assets/images/team/4.jpg',
    name: 'Fadi Waleed',
    designation: 'Backend-Developer'
  }, {
    image: 'assets/images/testimonial/5.jpeg',
    name: 'Febi Dawood',
    designation: 'AI Developer'
 }, {
  image: 'assets/images/testimonial/4(1).jpeg',
  name: 'Mariam Mahmoud',
  designation: 'Mobile-App Developer'
}, {
  image: 'assets/images/testimonial/6.jpeg',
  name: 'Marwa',
  designation: 'UI Developer'
}, {
  image: 'assets/images/testimonial/7(1).jpeg',
  name: 'Yassmine',
  designation: 'Frontend Developer'
}




]

}
