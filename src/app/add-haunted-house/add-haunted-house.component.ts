import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HauntedHouseService } from '../haunted-house.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-haunted-house',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './add-haunted-house.component.html',
  styleUrl: './add-haunted-house.component.css',
})
export class AddHauntedHouseComponent {
  notificationMessage = '';
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
    price: undefined,
    status: 'For Sale' as 'For Sale' | 'Under Contract' | 'Sold',
  };

  onSubmit() {
    this.newHouse.id = Date.now();
    this.hauntedHouseService.addHauntedHouse(this.newHouse);
    this.notificationMessage = 'Haunted House added successfully!';
    setTimeout(() => (this.notificationMessage = ''), 3000);
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
      price: undefined,
      status: 'For Sale' as 'For Sale' | 'Under Contract' | 'Sold',
    };
  }
}
