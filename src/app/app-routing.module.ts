import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { HeroDetailComponent } from "./components/hero-detail/hero-detail.component";
import { MessagesComponent } from "./components/messages/messages.component";

const routes: Routes = [
  { path: "heroes", component: HeroesComponent },
  { path: "messages", component: MessagesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "detail/:id", component: HeroDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
