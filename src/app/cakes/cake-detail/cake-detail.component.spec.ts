import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeDetailComponent } from './cake-detail.component';

describe('CakeDetailComponent', () => {
  let component: CakeDetailComponent;
  let fixture: ComponentFixture<CakeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeDetailComponent]
    });
    fixture = TestBed.createComponent(CakeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
