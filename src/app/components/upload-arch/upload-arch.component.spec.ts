import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArchComponent } from './upload-arch.component';

describe('UploadArchComponent', () => {
  let component: UploadArchComponent;
  let fixture: ComponentFixture<UploadArchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadArchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadArchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
