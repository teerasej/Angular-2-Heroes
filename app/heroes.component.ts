import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']

})
export class HeroesComponent implements OnInit {

  
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService){
    
  }

  ngOnInit() : void {
    this.getHeroes();
  }

  gotoDetail() : void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes)
      .catch(message => console.log(message));
  } 

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
