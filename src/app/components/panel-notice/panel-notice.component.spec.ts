import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNoticeComponent } from './panel-notice.component';

describe('PanelNoticeComponent', () => {
  let component: PanelNoticeComponent;
  let fixture: ComponentFixture<PanelNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelNoticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
