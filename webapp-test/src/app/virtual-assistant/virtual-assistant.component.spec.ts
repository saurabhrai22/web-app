import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualAssistantComponent } from './virtual-assistant.component';

describe('VirtualAssistantComponent', () => {
  let component: VirtualAssistantComponent;
  let fixture: ComponentFixture<VirtualAssistantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualAssistantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
