import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // binding to the master component selectedHero
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
