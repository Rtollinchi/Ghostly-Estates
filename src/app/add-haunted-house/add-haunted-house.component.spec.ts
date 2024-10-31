import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHauntedHouseComponent } from './add-haunted-house.component';

describe('AddHauntedHouseComponent', () => {
  let component: AddHauntedHouseComponent;
  let fixture: ComponentFixture<AddHauntedHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHauntedHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHauntedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
