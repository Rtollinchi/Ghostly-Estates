import { Routes } from '@angular/router';
import { HauntedHouseListComponent } from './haunted-house-list/haunted-house-list.component';
import { HauntedHouseDetailComponent } from './haunted-house-detail/haunted-house-detail.component';

export const routes: Routes = [
  { path: '', component: HauntedHouseListComponent },
  { path: 'house/:id', component: HauntedHouseDetailComponent },
];
