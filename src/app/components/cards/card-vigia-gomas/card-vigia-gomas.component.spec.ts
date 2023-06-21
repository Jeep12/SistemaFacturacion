import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVigiaGomasComponent } from './card-vigia-gomas.component';

describe('CardVigiaGomasComponent', () => {
  let component: CardVigiaGomasComponent;
  let fixture: ComponentFixture<CardVigiaGomasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVigiaGomasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVigiaGomasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
