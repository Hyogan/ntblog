import { animate, query, style, transition, trigger } from "@angular/animations";
import { Optional } from "@angular/core";

export const routeTransition = trigger('routeTransition',[
    transition('* => *', [
        query(':enter', [
            style({opacity : 0, scale : 0.9})
        ],{optional : true}),

        query(':leave',[
            animate('5s',style({opacity :  0 , scale : 0.9}))
        ]),

        query(':enter',[
            animate('5s', style({opacity : 1, scale : 1}))
        ], {optional : true})
    ])
])