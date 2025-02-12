import {Component, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';  // Import Router for navigation


// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  standalone: false,
  styleUrls: ['./welcome.component.scss']

})
export class WelcomeComponent {
  constructor(private router: Router) {
    console.log('WelcomeComponent Loaded!');  // Debugging line
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }
  @ViewChild('videoPlayer') videoPlayer!: ElementRef;

  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;
    video.play().catch((error: any) => {
      console.log('Autoplay prevented:', error);
    });
  }

}
