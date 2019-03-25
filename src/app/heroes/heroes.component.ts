import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  // keep constructor only to initialize fields/props or inject services
  constructor(private heroServ: HeroService) { }

  ngOnInit() {
    // subscribes to the async data
    this.heroServ.getHeroes().subscribe(items => this.heroes = items);
  }

  onSelect = (hero: Hero) => this.selectedHero = hero;
}
