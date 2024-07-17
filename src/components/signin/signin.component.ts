import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  template: `
    <section class="sign_block">
            <h1>SIGN IN </h1>
            <p>Connect and join the funniest comments from your tech friends, <br>  Come back to the tech world</p>
            <form formGroup="signInForm">
                    <!-- PSEUDO NAME -->
                <label for="pseudo"> Enter your  nickname</label>
                <input type="text"  id="peudo" formControlName="pseudo">

                <!-- PASSWORD -->
                <label for="password">Your password</label>
                <input type="password" name="password" id="password" formControlName="password">

                <button type="submit" [disabled]="!signInForm.valid">Submit</button>
            </form>
        </section>
  `,
  styleUrl : "../../log-style.css"
})
export class SigninComponent {

  // formGroup : FormGroup = []
  signInForm = new FormGroup ({
    pseudo : new FormControl(''),
    password : new FormControl(''),
  });


}
