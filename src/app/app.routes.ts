import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ArticlesComponent } from '../components/articles/articles.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { CategoryListComponent } from '../components/category-list/category-list.component';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { SignupComponent } from '../components/signup/signup.component';
import { SigninComponent } from '../components/signin/signin.component';
import { ArticleDetailsComponent } from '../components/article-details/article-details.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
        
    },
    {
        path : 'home',
        component : HomeComponent,
        
    },
    {
        path : 'articles',
        component : ArticlesComponent,
        
    },
    {
        path : 'article/details/slug',
        component : ArticleDetailsComponent,
    },
    
    {
        path : 'categories',
        component : CategoryListComponent,
        
    },
    {
        path : 'about-us',
        component : AboutUsComponent,
        
    },
    {
        path : 'user/signup',
        component : SignupComponent
    },
    {
        path : 'user/signin',
        component : SigninComponent
    },
    { 
        path: '**',
         component: PageNotFoundComponent
    },
 
    // {
    //     path : '/articles',
    //     component : HomeComponent
    // }
];
