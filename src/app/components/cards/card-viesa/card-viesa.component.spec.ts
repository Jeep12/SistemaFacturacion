import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViesaComponent } from './card-viesa.component';

describe('CardViesaComponent', () => {
  let component: CardViesaComponent;
  let fixture: ComponentFixture<CardViesaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViesaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardViesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
