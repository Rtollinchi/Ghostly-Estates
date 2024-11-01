import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHauntedHouseComponent } from './edit-haunted-house.component';

describe('EditHauntedHouseComponent', () => {
  let component: EditHauntedHouseComponent;
  let fixture: ComponentFixture<EditHauntedHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditHauntedHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHauntedHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
