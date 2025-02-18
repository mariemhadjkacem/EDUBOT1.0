import { Component } from '@angular/core';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss'],
  standalone: false
})
export class FormationComponent {
  formations = [
    {
      id: 'fullstack',  // Unique ID
      title: 'Full-Stack Development',
      description: 'Master web development from A to Z with modern technologies.',
      image: './assets/images/fullstack.png'
    },
    {
      id: 'cybersecurity',  // Unique ID
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Learn how to secure systems and test their vulnerabilities.',
      image: './assets/images/cybersecurity.png'
    },
    {
      id: 'ai',  // Unique ID
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Explore AI, Deep Learning, and Machine Learning with Python.',
      image: './assets/images/ai.png'
    },
    {
      id: 'blockchain',  // Unique ID
      title: 'Blockchain & Cryptocurrencies',
      description: 'Dive into blockchain, smart contracts, and Web3 development.',
      image: './assets/images/blockchain.png'
    },
    {
      id: 'cloud',  // Unique ID
      title: 'Cloud Computing & DevOps',
      description: 'Deploy large-scale applications with AWS, Docker, and Kubernetes.',
      image: './assets/images/cloud.webp'
    }
  ];
}
