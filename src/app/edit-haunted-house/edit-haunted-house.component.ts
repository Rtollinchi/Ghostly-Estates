import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HauntedHouseService, HauntedHouse } from '../haunted-house.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'edit-haunted-house',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './edit-haunted-house.component.html',
  styleUrl: './edit-haunted-house.component.css',
})
export class EditHauntedHouseComponent implements OnInit {
  notificationMessage = '';
  hauntedHouse: HauntedHouse | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hauntedHouseService: HauntedHouseService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.hauntedHouse = this.hauntedHouseService.getHauntedHouse(id);

    if (this.hauntedHouse) {
      this.hauntedHouse.history =
        this.hauntedHouseService.getHauntedHouseHistory(id);
    }
  }

  onSubmit(): void {
    if (this.hauntedHouse) {
      this.hauntedHouseService.updateHauntedHouse(this.hauntedHouse);
      this.notificationMessage = 'Haunted House updated successfully!';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => (this.notificationMessage = ''), 3000);
    }
  }

  onDelete(): void {
    if (this.hauntedHouse) {
      this.hauntedHouseService.deleteHauntedHouse(this.hauntedHouse.id);
      this.router.navigate(['/']);
    }
  }
}
