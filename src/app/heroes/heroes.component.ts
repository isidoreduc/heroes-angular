import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // keep constructor only to initialize fields/props or inject services
  constructor(private heroServ: HeroService) { }

  ngOnInit() {
    // subscribes to the async data
    this.heroServ.getHeroes().subscribe(items => this.heroes = items);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroServ.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroServ.deleteHero(hero).subscribe();
  }
}
