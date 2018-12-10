import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificaionBoxComponent } from './notificaion-box.component';

describe('NotificaionBoxComponent', () => {
  let component: NotificaionBoxComponent;
  let fixture: ComponentFixture<NotificaionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificaionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificaionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
