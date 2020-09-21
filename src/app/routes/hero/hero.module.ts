import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './components/ranking/ranking.component';
import { HeroService } from './services/hero.service';

@NgModule({
  declarations: [RankingComponent],
  imports: [
    CommonModule
  ],
  providers: [HeroService]
})
export class HeroModule { }
