import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [],
  template: `
      <section class="sign_block">
          <h1 class="section_title">SIGN UP</h1>
          <p>Create an account and stay updated of the last news and chat with others . <br>join the tech world</p>
          <form formGroup="signUpForm">
                  <!-- PSEUDO NAME -->
              <label for="pseudo"> Enter a nickname</label>
              <input type="text"  id="peudo" formControlName="pseudo">

              <!-- EMAIL ADRESS -->
              <label for="email"> Email Adress</label>
              <input type="text"  id="email" formControlName="email">

              <!-- PASSWORD -->
              <label for="password">Your password</label>
              <input type="password" name="password" id="password" formControlName="password">

              <!-- PASSWORD CONFIRMATION -->
              <label for="password-confirmation">Confirm your password</label>
              <input type="password" name="password-confirmation" id="password-confirmation" formControlName="passwordConfirmation">
              <button type="submit" [disabled]="!signUpForm.valid">Submit</button>
          </form>
      </section>
`,
styleUrl : "../../log-style.css"
})
export class SignupComponent {
  signUpForm = new FormGroup ({
    email : new FormControl(''),
    pseudo : new FormControl(''),
    password : new FormControl(''),
    passwordConfirmation : new FormControl('')
  });

}
