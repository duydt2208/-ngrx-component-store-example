import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../models';
import { HeroRankingStore } from '../../store/hero-ranking/store';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
  providers: [HeroRankingStore]
})
export class RankingComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  constructor(private readonly heroRankingStore: HeroRankingStore) {
    this.heroes$ = this.heroRankingStore.heroes$;
  }

  ngOnInit(): void {
    this.heroRankingStore.fetchHeroes();
  }
}
