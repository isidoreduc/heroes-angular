import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  onSelect = (hero: Hero) => this.selectedHero = hero;
}
