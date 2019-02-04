import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from "./create/create.component";
import { BookwormComponent } from "./bookworm/bookworm.component";
import { DiscoverComponent } from "./discover/discover.component";

const routes: Routes = [
  { path: '', redirectTo: "/create", pathMatch: 'full' },
  { path: 'create', component: CreateComponent},
  { path: 'bookworm', component: BookwormComponent },
  { path: 'discover', component: DiscoverComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }