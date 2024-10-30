import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HauntedHouseService, HauntedHouse } from '../haunted-house.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'haunted-house-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './haunted-house-detail.component.html',
  styleUrl: './haunted-house-detail.component.css',
})
export class HauntedHouseDetailComponent implements OnInit {
  hauntedHouse: HauntedHouse | undefined;
  houseHistory: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private hauntedHouseService: HauntedHouseService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Fetched ID:', id);
    this.hauntedHouse = this.hauntedHouseService.getHauntedHouse(id);
    console.log('Fetched Haunted House:', this.hauntedHouse);
    this.houseHistory = this.hauntedHouseService.getHauntedHouseHistory(id);
  }
}
