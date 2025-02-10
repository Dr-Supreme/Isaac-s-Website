import { Component, Input, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet, RouterLink, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RouterLink, AppComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] // Changed from styleUrl to styleUrls
})
export class AppComponent implements OnInit {
  title = 'my-angular-website';
  @Input() label: string = '';
  @Input() route: string = '';
  t1 = false;

  navLinks = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Projects', route: '/projects' },
    { label: 'Links', route: '/portfolio' },
    { label: 'Contact', route: '/contact' }
  ];

  // <li><a class="nav-item" routerLink="/home" >home</a></li>
  //     <li><a class="nav-item" routerLink="/about">About Me</a></li>
  //     <li><a class="nav-item" routerLink="/projects">Projects</a></li>
  //     <li><a class="nav-item" routerLink="/portfolio">Linkedin</a></li>
  //     <li><a class="nav-item" routerLink="/contact">Contact Me</a></li>

  constructor(private router: Router, private fb: FormBuilder) {}

  myForm!: FormGroup;

    ngOnInit() {
      this.myForm = this.fb.group({
        myDropdown: ['', Validators.required]
      });
    }

    dropdownOptions = [
      { value: 'Home', label: 'Home' },
      { value: 'About Me', label: 'About Me' },
      { value: 'Projects', label: 'Projects' },
      { value: 'Links', label: 'Links' },
      { value: 'Contact Me', label: 'Contact Me' }
    ];

    onSubmit() {
      if (this.myForm.valid) {
        console.log('Form submitted:', this.myForm.value);
      }
    }
    
  navigate(route: string) {
    this.router.navigate([this.route]);
  }

  toggle1(){
    this.t1 = true;
  }

  navigateToComponent1() {
    this.router.navigate(['./component1']);
  }

  navigateToComponent2() {
    this.router.navigate(["./component2"]);
  }
}
