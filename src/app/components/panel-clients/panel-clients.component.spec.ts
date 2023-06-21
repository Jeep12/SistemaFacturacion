import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelClientsComponent } from './panel-clients.component';

describe('PanelClientsComponent', () => {
  let component: PanelClientsComponent;
  let fixture: ComponentFixture<PanelClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
