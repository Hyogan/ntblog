import { Component, Input } from '@angular/core';
import { Article } from '../../interfaces/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule], 
  template: `
      <article class="article-item">
        <div class="article-pic">
          <img src="assets/images/pc1.jpg" alt="">
        </div>
        <div class="article-infos">
          <h3 class="title">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
          <div class="common">
            <span class="date">25th may 2024</span>
            <span class="reading-time">4 minutes</span>
            <span class="category">Performance</span>
          </div>
          <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, recusandae... </p>
          <a href="#" class="read-more">read more</a>
        </div>
      </article>
  `,
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  @Input()
  article : Article | undefined;

}
