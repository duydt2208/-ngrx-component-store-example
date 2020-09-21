import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { compareHeroRank, Hero } from '../../models';
import { HeroService } from '../../services/hero.service';
import { HeroRankingState, initialState } from './state';

@Injectable()
export class HeroRankingStore extends ComponentStore<HeroRankingState> {
    constructor(private heroService: HeroService) {
        super(initialState);

        this.effect(
            (isLoading$: Observable<boolean>) => isLoading$.pipe(
                filter(isLoading => !!isLoading),
                switchMap(() =>
                    this.heroService.fetchHeroes()
                        .pipe(
                            map((heroes: Hero[]) => heroes.sort((a, b) => compareHeroRank(a.rank, b.rank))),
                            tap((heroes: Hero[]) => this.setHeroes(heroes.reverse())),
                            tap(() => this.fetchHeroesDone())
                        )
                )
            )
        )(this.loadingHeroes$);
    }

    readonly heroes$: Observable<Hero[]> = this.select(
        state => state.heroes,
        { debounce: true }
    );
    private readonly setHeroes = this.updater((state: HeroRankingState, heroes: Hero[]) => ({
        ...state,
        heroes
    }));

    readonly loadingHeroes$: Observable<boolean> = this.select(state => state.loadingHeroes, { debounce: true });
    readonly fetchHeroes = this.updater((state) => ({
        ...state,
        loadingHeroes: true
    }));
    private readonly fetchHeroesDone = this.updater((state) => ({
        ...state,
        loadingHeroes: false
    }));
}
