import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauntedHouseListComponent } from './haunted-house-list.component';

describe('HauntedHouseListComponent', () => {
  let component: HauntedHouseListComponent;
  let fixture: ComponentFixture<HauntedHouseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HauntedHouseListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HauntedHouseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
