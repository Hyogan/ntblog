import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent],
  // template: `
  //   <main class="flex flex-col w-full text-center justify-around items-center text-white">    
  //     <img src="logo/logoDark.png" alt="">
  //     <a href="#" >Entrer</a>
  //   </main>
  // `,
  styleUrl: './home.component.css',
  templateUrl: './home.component.html'
})


// <section class="hero-section flex flex-col space-y-16 items-center">
//     <h1 id="blog-title" class="text-4xl flex text-white font-bold">NT Blog</h1>
//     <p class="mt-4">Welcome to NT-Blog, the portal for the technology world</p>    
//     <a href="/" class="px-6 py-4 text-white bg-blue-400 hover:bg-blue-900 w-fit transition duration-700">Enter</a>
// </section>
export class HomeComponent {

  // formGroup : FormGroup = []
  contactForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    message : new FormControl('')
  });
  

}
