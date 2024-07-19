import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { routeTransition } from '../route-transition';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations : [
    routeTransition
  ]
})
export class AppComponent {
  title = 'ntblog';

  constructor(protected  route : ActivatedRoute) {
    
  }
}
