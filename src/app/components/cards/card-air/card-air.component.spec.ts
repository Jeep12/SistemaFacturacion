import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAirComponent } from './card-air.component';

describe('CardAirComponent', () => {
  let component: CardAirComponent;
  let fixture: ComponentFixture<CardAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
