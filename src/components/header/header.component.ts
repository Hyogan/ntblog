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
        <a class="" href="articles">Articles</a>
        <a class="" href="Home">Category</a>
        <a class="" href="Home">About</a>
        <a class="" href="Home">Contact</a>
      </nav>
      <div class="auth_links">
        <a class="" href="">signUp</a>
        <a class="" href="">signIn</a>
      </div>
    </header>
    <header [class.opened]="isOpen" class="mobile">
      <img src="logo/logoDark.png" alt="">
      <nav class="nav_links">
        <a href="/">Home</a>
        <a href="/articles">Articles</a>
        <a href="/">Category</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </nav>
      <div class="auth_links">
        <a href="#">Signup</a>
        <a href="#">Signin</a>
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
