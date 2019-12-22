import {
  trigger, animateChild, group,
  transition, animate, style, query, stagger
} from '@angular/animations';


// Routable animations
export const routeAnimation =
  trigger('routeAnimation', [
    transition('home <=> comp', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0
        })
      ]),
      query(':enter', [
        style({ left: '-100%', opacity: 1 })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('500ms ease-out', style({ left: '100%', opacity: 0 }))
        ]),
        query(':enter', [
          animate('500ms ease-out', style({ left: '0%', opacity: 1 }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

export const slideIn = trigger('slideIn', [
  transition(":enter", [
    query("tbody > tr", [style({ transform: 'translateX(-150%)' })]),
    query("tbody > tr", stagger('150ms', [
      animate('600ms ease-in', style({ transform: 'translateX(0)' }))
    ]))
  ])
]);