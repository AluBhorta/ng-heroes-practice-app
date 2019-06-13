import { Component, OnInit } from "@angular/core";
import { Hero } from "src/app/models/hero.model";
import { HeroService } from "src/app/services/hero.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.slice(2, 6);
    });
  }
}
