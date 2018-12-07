import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaEditorComponent } from './cta-editor.component';

describe('CtaEditorComponent', () => {
  let component: CtaEditorComponent;
  let fixture: ComponentFixture<CtaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
