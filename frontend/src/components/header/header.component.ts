import { Component } from '@angular/core';
// import 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [], 
  template: `
    <header class="desktop">
      <img src="logo/logoDark.png">
      <nav class=""> 
        <a class="" href="/">Home</a>
        <a class="" href="/articles">Articles</a>
        <a class="" href="/categories">Categories</a>
        <a class="" href="/about-us">About</a>
        <a class="" href="/article/details/slug">Contact</a>
      </nav>
      <div class="auth_links">
        <a class="" href="user/signup">signUp</a>
        <a class="" href="user/signin">signIn</a>
      </div>
    </header>
    <header [class.opened]="isOpen" class="mobile">
      <img src="logo/logoDark.png" alt="">
      <nav class="nav_links">
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/categories">Category</a>
        <a href="/about-us">About</a>
        <a href="/article/details/slug">Contact</a>
      </nav>
      <div class="auth_links">
        <a href="user/signup">Signup</a>
        <a href="user/signin">Signin</a>
      </div>
    </header>
  <div [class.open]="isOpen" class="local_header_mobile"> 
    <button id="menu-btn" (click)="toogleMenuState()" class="block hamburger" >
      <span class="hamburger-top"></span>
      <span class="hamburger-middle"></span>
      <span class="hamburger-bottom"></span>
    </button>
    <h1>NT-Blog</h1>
  </div>
   
  `,
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  isOpen : boolean = false;

  toogleMenuState() {
    this.isOpen = !this.isOpen;
  }

  constructor() {
    
  }

}
