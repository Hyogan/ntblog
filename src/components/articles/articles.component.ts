import { Component } from '@angular/core';
import { Article } from '../../interfaces/article';
import {ArticleComponent} from '../article/article.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [ArticleComponent,CommonModule],
  // template: `
  //   <p>
  //     articles works!
  //   </p>
  // `,
  styleUrl: './articles.component.css',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent {
  articleList : Article[] = [
    {
      id : 0,
      author : "james arthur",
      slug : "why-people-love-james",
      title: "why people love james",
      description: "why people love james is one of our question today sir alexander arnorld",
      url: "http://alexander.gmail.com",
      urlToImage : "assets/images/pc1.jpg",
      publishedAt : new Date(),
      content : "why people love james is one of our question today sir alexander arnorld why people love james is one of our question today sir alexander arnorld why people love james is one of our question today sir alexander arnorld why people love james is one of our question today sir alexander arnorld",
      reading_time : 25
    }
  ];

}
