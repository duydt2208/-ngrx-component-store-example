import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from '../models';

@Injectable()
export class HeroService {
    constructor(private http: HttpClient) { }

    fetchHeroes(): Observable<Hero[]> {
        return of(HERO_SOURCE);
    }
}

const HERO_SOURCE: Hero[] = [{
    rank: 'SSS',
    name: 'God of Fire',
    level: 100
}, {
    rank: 'A',
    name: 'Rider',
    level: 100
}, {
    rank: 'F',
    name: 'Biker',
    level: 50
}, {
    rank: 'S',
    name: 'Phoenix',
    level: 100
}];
