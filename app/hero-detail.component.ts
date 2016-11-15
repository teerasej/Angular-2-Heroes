import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{name}} details!</h2>
            <div>
                <label for="">id: </label>{{hero.id}}
            </div>
            <div>
                <label for="">name: </label>
                <input [(ngModel)]="hero.name" placeholder="name">
            </div>
        </div>
    `
})

export class HeroDetailComponent {
    hero: Hero;
}