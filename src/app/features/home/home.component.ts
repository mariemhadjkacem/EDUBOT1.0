import {Component, NgIterable} from '@angular/core';
import { CommonModule } from '@angular/common';  // Import necessary modules

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: false,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Home component logic
  courses: (NgIterable<unknown> & NgIterable<any>) | undefined | null;
  testimonials: (NgIterable<unknown> & NgIterable<any>) | undefined | null;

  navigateToCourse() {

  }
  categories = ['All', 'Programming', 'Data Science', 'Design', 'Business', 'Marketing'];

  featuredCourses = [
    {
      title: 'Angular Masterclass',
      difficulty: 'Intermediate',
      duration: 15,
      thumbnail: 'assets/images/courses/angular.jpg',
      enrolled: 2450,
      author: {
        name: 'John Doe',
        avatar: 'assets/images/avatars/1.jpg'
      }
    },
    // Add more courses
  ];

  learningPaths = [
    {
      icon: 'code',
      title: 'Frontend Development',
      description: 'Master modern web development technologies'
    },
    {
      icon: 'data_usage',
      title: 'Data Analysis',
      description: 'Become proficient in data manipulation and visualization'
    },
    // Add more paths
  ];
}
