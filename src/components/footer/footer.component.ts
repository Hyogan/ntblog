import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="footer" >
      <div class="links-block">
            <!-- About us links -->
        <div class="links-items">
            <h3 class="links-title">A propos</h3>
            <ul>
                <li><a href="#">Fonctionnement du site  </a></li>
                <li><a href="#">Conditions générales de vente  </a></li>
                <li><a href="#">Données et confidentialité  </a></li>
            </ul>
        </div>

        <!-- FAST LINKS -->
        <div class="links-items">
            <h3 class="links-title">A propos</h3>
            <ul>
                <li><a href="#">Fonctionnement du site  </a></li>
                <li><a href="#">Conditions générales de vente  </a></li>
                <li><a href="#">Données et confidentialité  </a></li>
            </ul>
        </div>
        
            <!-- Our home section -->
        <div class="links-items">
            <h3 class="links-title">Nos hébergements</h3>
            <ul>     
                <li><a href="#">Charte qualité  </a></li>
                <li><a href="#">Soumettre votre hotel  </a></li>
            </ul>
        </div>
        
            <!-- Our help sections -->
        <div class="links-items">
            <h3 class="links-title">Assistance</h3>
            <ul>    
                <li><a href="#">Centre d'aide </a></li>
                <li><a href="contact-us.html">Nous contacter </a></li>
            </ul>
        </div>
    
      </div>
      <div class="copyright">
        copyright nelsontia &#64;2024 , all rights reserved
      </div>
    </footer>
  `,
  styleUrl : './footer.component.css'
})
export class FooterComponent {

}
