import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  value = "";
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe(heroes => (this.heroes = heroes.slice(0, 8)));
  }

  onKey(value: string) {
    this.value += (<HTMLInputElement>event.target).value + " | ";
  }

  onKeyEnter(value: string) {
    this.value = value;
  }
  update(value: string) {
    this.value = value;
  }
}
