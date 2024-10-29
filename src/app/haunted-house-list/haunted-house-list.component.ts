import { HauntedHouse } from './../haunted-house.service';
import { Component, OnInit } from '@angular/core';
import { HauntedHouseService } from '../haunted-house.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'haunted-house-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './haunted-house-list.component.html',
  styleUrl: './haunted-house-list.component.css',
})
export class HauntedHouseListComponent implements OnInit {
  hauntedHouses: HauntedHouse[] = [];

  constructor(private hauntedHouseService: HauntedHouseService) {}

  ngOnInit(): void {
    this.hauntedHouses = this.hauntedHouseService.getHauntedHouses();
  }
}
