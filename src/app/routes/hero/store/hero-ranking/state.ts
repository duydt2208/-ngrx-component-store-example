import { Hero } from '../../models';

export interface HeroRankingState {
    heroes: Hero[];
    loadingHeroes: boolean;
}

export const initialState: HeroRankingState = {
    heroes: [],
    loadingHeroes: false
};
