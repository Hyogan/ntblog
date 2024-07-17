import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class="page_content">
      <p class="description">Page not found, Oups</p>
      <p class="title">404</p>
      <p class="details">This page could not be found, make sure to write a valid url or try again letter</p>
    </div>
  `,
  styles : `
    .page_content {
      height: 100vh;
      width : 100%;
      display : flex;
      justify-content : center;
      align-items : center;
      flex-direction : column;
      padding-top: 140px;
      color : white ;
      background : var(--primary-color);
    }

    p.title {
        font-size: 25vw ;
    }

    p.description {
        font-size: 35px;
        text-transform : uppercase;

    }

    p.details {
        font-size: 16px;
    }`
})
export class PageNotFoundComponent {

}
