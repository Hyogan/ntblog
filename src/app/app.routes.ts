import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ArticlesComponent } from '../components/articles/articles.component';

export const routes: Routes = [
    {
        path : '',
        component : HomeComponent,
        
    },
    {
        path : 'articles',
        component : ArticlesComponent,
        
    }
 
    // {
    //     path : '/articles',
    //     component : HomeComponent
    // }
];
