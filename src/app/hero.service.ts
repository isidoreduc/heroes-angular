import { Injectable } from '@angular/core';
import { HEROES } from './models/mock-heroes';
import { Observable, of } from 'rxjs';
import { Hero } from './models/hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServ: MessageService) { }

  // returning an Observable to which components can subscribe
  getHeroes(): Observable<Hero[]> {
    this.messageServ.add('HeroService: fetched heroes.');
    return of(HEROES);
  }
}
