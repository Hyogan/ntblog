import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  template: `
      <section class="contact_us">
            <h1>CONTACT US  </h1>
            <p>Needs, worrining, encouragement , tell us something, we are here for it !</p>
            <form formGroup="contactForm">
                    <!-- FIRST NAME -->
                <label for="first-name"> First Name</label>
                <input type="text"  id="first-name" formControlName="firstName">

                <!-- LAST NAME -->
                <label for="last-name"> Last Name</label>
                <input type="text"  id="last-name" formControlName="lastName">

                <!-- EMAIL ADRESS -->
                <label for="email"> Email Adress</label>
                <input type="text"  id="email" formControlName="email">

                 <!-- MESSAGE-->
                 <label for="message"> Message</label>
                 <input type="text"  id="message" formControlName="message">

                 <button type="submit" [disabled]="!contactForm.valid">Submit</button>
            </form>
        </section>
  `,
  styles: `
    @keyframes bounceit {
        0% {transform: translateY(0px);}
        50% {transform: translateY(14px);}
        100% {transform: translateY(-14px);}
    }

    section.contact_us {
        display: flex;
        width: 80%;
        min-height: 450px;
        box-shadow: 2px 3px 4px 5px 6px#04091e;
        background: rgb(4, 4, 41);
        margin: 30px auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        margin-bottom: 50px;
        gap: 10px;
        padding: 15px;
        animation: name duration timing-function delay iteration-count direction fill-mode;
        animation: bounceit 3s  ease-in-out infinite alternate both;

    }

    section.contact_us form {
        display: flex;
        flex-direction: column;
        width: 80%;
        justify-content: start;
        align-items: start;
        gap: 15px;
    }

    section.contact_us form label {
        font-size: 17px;
    }

    section.contact_us form input, 
    section.contact_us form textarea {
        padding: 10px 15px;
        width: 100%;
        font-weight: bold;
        font-size: 15px;
    }

    section.contact_us form button {
        padding: 13px 25px;
        background: none;
        color: white;
        transition: .6s;
        cursor: pointer;
        border: none;
        border: 2px solid white;
    }

    section.contact_us form button:hover {
        background: white;
        color: #04091e;
        transform: translateY(-7px);
    }


`
})
export class ContactUsComponent {


  // formGroup : FormGroup = []
    contactForm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      message : new FormControl('')
    });
  

}