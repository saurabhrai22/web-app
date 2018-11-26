import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainiframeComponent } from './mainiframe.component';

describe('MainiframeComponent', () => {
  let component: MainiframeComponent;
  let fixture: ComponentFixture<MainiframeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainiframeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainiframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
