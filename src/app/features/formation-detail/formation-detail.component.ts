import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

type FormationId = 'fullstack' | 'cybersecurity' | 'ai' | 'blockchain' | 'cloud'; // Add missing values

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.scss'] ,
  standalone: false
})
export class FormationDetailComponent implements OnInit {
  formationId: FormationId = 'fullstack'; // Default value
  formationData: any;

  formations: Record<FormationId, any> = { // Add missing formations
    fullstack: {
      title: "Fullstack Web Development",
      description: "Master front-end and back-end technologies to build dynamic web applications.",
      image: "./assets/images/fullstack.png",
      duration: "6 months",
      level: "Beginner to Advanced",
      prerequisites: [
        "Basic knowledge of programming (HTML, CSS, JavaScript)",
        "Familiarity with Git & GitHub (optional)"
      ],
      curriculum: [
        { title: "HTML, CSS & JavaScript Fundamentals", type: "video", link: "https://www.example.com/html-course" },
        { title: "Frontend Frameworks (React & Angular)", type: "video", link: "https://www.example.com/react-angular" },
        { title: "Backend Development with Node.js", type: "article", link: "https://www.example.com/nodejs" },
        { title: "Databases (SQL & NoSQL)", type: "book", link: "https://www.example.com/sql-nosql" }
      ],
      resources: [
        { type: "Book", title: "You Don't Know JS", link: "https://www.example.com/jsbook" },
        { type: "Online Course", title: "Fullstack Open 2024", link: "https://www.example.com/fullstack" }
      ]
    },
    cybersecurity: {
      title: "Cybersecurity & Ethical Hacking",
      description: "Learn ethical hacking, penetration testing, and how to secure networks.",
      image: "./assets/images/cybersecurity.png",
      duration: "5 months",
      level: "Intermediate",
      prerequisites: [
        "Basic knowledge of networking",
        "Linux command line familiarity"
      ],
      curriculum: [
        { title: "Network Security Basics", type: "video", link: "https://www.example.com/network-security" },
        { title: "Ethical Hacking Techniques", type: "article", link: "https://www.example.com/hacking-techniques" },
        { title: "Encryption & Cryptography", type: "book", link: "https://www.example.com/cryptography" },
        { title: "Cyber Threats & Prevention", type: "video", link: "https://www.example.com/threats" }
      ],
      resources: [
        { type: "Book", title: "The Web Application Hacker's Handbook", link: "https://www.example.com/web-hacking" },
        { type: "Course", title: "Certified Ethical Hacker (CEH)", link: "https://www.example.com/ceh" }
      ]
    },
    ai: {  // Add AI formation
      title: "Artificial Intelligence & Machine Learning",
      description: "Explore AI, Deep Learning, and Machine Learning with Python.",
      image: "./assets/images/ai.png",
      duration: "6 months",
      level: "Intermediate to Advanced",
      prerequisites: [
        "Basic knowledge of programming (Python)",
        "Familiarity with statistics and algebra"
      ],
      curriculum: [
        { title: "Introduction to AI", type: "video", link: "https://www.example.com/ai-intro" },
        { title: "Deep Learning with TensorFlow", type: "article", link: "https://www.example.com/tensorflow" },
        { title: "Machine Learning Algorithms", type: "book", link: "https://www.example.com/ml-algorithms" }
      ],
      resources: [
        { type: "Book", title: "Hands-On Machine Learning with Scikit-Learn", link: "https://www.example.com/ml-book" },
        { type: "Online Course", title: "Deep Learning Specialization", link: "https://www.example.com/deep-learning" }
      ]
    },
    blockchain: {  // Add Blockchain formation
      title: "Blockchain & Cryptocurrencies",
      description: "Learn about blockchain technology, smart contracts, and cryptocurrency fundamentals.",
      image: "./assets/images/blockchain.png",
      duration: "6 months",
      level: "Intermediate",
      prerequisites: [
        "Basic knowledge of programming and cryptography"
      ],
      curriculum: [
        { title: "Blockchain Fundamentals", type: "video", link: "https://www.example.com/blockchain-fundamentals" },
        { title: "Smart Contracts with Solidity", type: "article", link: "https://www.example.com/solidity" }
      ],
      resources: [
        { type: "Book", title: "Mastering Bitcoin", link: "https://www.example.com/mastering-bitcoin" },
        { type: "Online Course", title: "Blockchain Basics", link: "https://www.example.com/blockchain-basics" }
      ]
    },
    cloud: {  // Add Cloud formation
      title: "Cloud Computing & DevOps",
      description: "Learn how to deploy scalable applications using AWS, Docker, and Kubernetes.",
      image: "./assets/images/cloud.webp",
      duration: "5 months",
      level: "Beginner to Intermediate",
      prerequisites: [
        "Basic knowledge of cloud computing concepts",
        "Familiarity with Docker"
      ],
      curriculum: [
        { title: "Cloud Computing Basics", type: "video", link: "https://www.example.com/cloud-computing" },
        { title: "Docker and Kubernetes Fundamentals", type: "article", link: "https://www.example.com/docker-kubernetes" }
      ],
      resources: [
        { type: "Book", title: "Kubernetes Up & Running", link: "https://www.example.com/kubernetes-book" },
        { type: "Online Course", title: "AWS Certified Solutions Architect", link: "https://www.example.com/aws" }
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && this.formations[id as FormationId]) {
      this.formationId = id as FormationId;
      this.formationData = this.formations[this.formationId];
    } else {
      console.error('Formation not found or invalid ID!');
      // Optionally, redirect or show a "not found" message
    }
  }
  // Méthode pour alterner l'affichage des détails d'un module
  toggleDescription(module: any): void {
    module.showDetails = !module.showDetails; // Basculer l'état d'affichage
  }
}