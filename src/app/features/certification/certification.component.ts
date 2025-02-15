import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas'; // Ensure it's installed: npm install html2canvas

@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.scss'],
  standalone: false,
})
export class CertificationComponent {
  @Input() courseTitle: string = 'Course Title';
  @Input() studentName: string = 'John Doe';
  @Input() issueDate: string = new Date().toLocaleDateString();

  isVisible: boolean = false; // Controls certificate visibility

  @ViewChild('certificateRef', { static: false }) certificateRef!: ElementRef; // Reference to certificate element

  /**
   * Displays the certification modal
   */
  showCertificate() {
    this.isVisible = true;
  }

  /**
   * Hides the certification modal
   */
  closeCertificate() {
    this.isVisible = false;
  }

  /**
   * Captures the certification card as an image and downloads it
   */
  async downloadCertificate() {
    if (!this.certificateRef) return;

    const element = this.certificateRef.nativeElement;

    try {
      const canvas = await html2canvas(element);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `Certificate_${this.studentName}.png`;
      link.click();
    } catch (error) {
      console.error('Error capturing certificate:', error);
    }
  }
}
