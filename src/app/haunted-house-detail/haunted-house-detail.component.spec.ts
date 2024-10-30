import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HauntedHouseDetailComponent } from './haunted-house-detail.component';

describe('HauntedHouseDetailComponent', () => {
  let component: HauntedHouseDetailComponent;
  let fixture: ComponentFixture<HauntedHouseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HauntedHouseDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HauntedHouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
