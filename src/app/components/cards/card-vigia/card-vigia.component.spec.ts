import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVigiaComponent } from './card-vigia.component';

describe('CardVigiaComponent', () => {
  let component: CardVigiaComponent;
  let fixture: ComponentFixture<CardVigiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVigiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVigiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
