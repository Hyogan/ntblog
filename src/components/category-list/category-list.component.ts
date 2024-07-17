import { Component } from '@angular/core';
import { Category } from '../../interfaces/category';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categories : Category[] = [
    {
      id : 1,
      name : 'all',
      path : 'all',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus quod vel saepe quae obcaecati?"

    },
    {
      id : 2,
      name : 'programming',
      path : 'programming',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus quod vel saepe quae obcaecati?"

    },
    {
      id : 3,
      name : 'ui',
      path : 'ui',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus quod vel saepe quae obcaecati?"

    },
    {
      id : 4,
      name : 'tutorials',
      path : 'tutorials',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus quod vel saepe quae obcaecati?"

    },
    {
      id : 5,
      name : 'development',
      path : 'development',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus quod vel saepe quae obcaecati?"

    },
    {
      id : 6,
      name : 'design',
      path : 'design',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus quod vel saepe quae obcaecati?"

    },
    {
      id : 7,
      name : 'process',
      path : 'process',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus quod vel saepe quae obcaecati?"

    },
    {
      id : 8,
      name : 'performance',
      path : 'performance',
      description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptatibus quod vel saepe quae obcaecati?"

    }
  ]

}
