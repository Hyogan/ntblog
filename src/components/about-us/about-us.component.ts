import { Component } from '@angular/core';
import { ContactUsComponent } from '../contact-us/contact-us.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [ContactUsComponent],
  styles: ``,
  templateUrl : './about-us.component.html'
})
export class AboutUsComponent {

}
