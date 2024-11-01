import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HauntedHouseService } from '../haunted-house.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'add-haunted-house',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './add-haunted-house.component.html',
  styleUrl: './add-haunted-house.component.css',
})
export class AddHauntedHouseComponent {
  constructor(private hauntedHouseService: HauntedHouseService) {}

  newHouse = {
    id: 0,
    name: '',
    location: {
      city: '',
      state: '',
      zip: '',
    },
    description: '',
    imageUrl: '',
    history: '',
  };

  onSubmit() {
    this.newHouse.id = Date.now();
    this.hauntedHouseService.addHauntedHouse(this.newHouse);
    console.log('New Haunted House:', this.newHouse);
    this.resetForm();
  }

  resetForm() {
    this.newHouse = {
      id: 0,
      name: '',
      location: {
        city: '',
        state: '',
        zip: '',
      },
      description: '',
      imageUrl: '',
      history: '',
    };
  }
}
