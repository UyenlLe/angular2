import { Component, OnInit } from "@angular/core";
import { Observable, Subject } from "../../../node_modules/rxjs";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import {
  debounce,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from "../../../node_modules/rxjs/operators";

@Component({
  selector: "app-hero-search",
  templateUrl: "./hero-search.component.html",
  styleUrls: ["./hero-search.component.css"]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchItems = new Subject<string>();

  constructor(private heroService: HeroService) {}
  search(term: string): void {
    this.searchItems.next(term);
  }
  ngOnInit(): void {
    this.heroes$ = this.searchItems.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
