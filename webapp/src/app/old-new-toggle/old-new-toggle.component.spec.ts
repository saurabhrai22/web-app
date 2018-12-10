import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldNewToggleComponent } from './old-new-toggle.component';

describe('OldNewToggleComponent', () => {
  let component: OldNewToggleComponent;
  let fixture: ComponentFixture<OldNewToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldNewToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldNewToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
