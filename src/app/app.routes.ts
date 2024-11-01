import { Routes } from '@angular/router';
import { HauntedHouseListComponent } from './haunted-house-list/haunted-house-list.component';
import { HauntedHouseDetailComponent } from './haunted-house-detail/haunted-house-detail.component';
import { AddHauntedHouseComponent } from './add-haunted-house/add-haunted-house.component';
import { EditHauntedHouseComponent } from './edit-haunted-house/edit-haunted-house.component';

export const routes: Routes = [
  { path: '', component: HauntedHouseListComponent },
  { path: 'house/:id', component: HauntedHouseDetailComponent },
  { path: 'add-house', component: AddHauntedHouseComponent },
  { path: 'edit/:id', component: EditHauntedHouseComponent },
];
