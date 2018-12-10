import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-breakpoints',
  templateUrl: './breakpoints.component.html',
  styleUrls: ['./breakpoints.component.css']
})
export class BreakpointsComponent implements OnInit {
  @Output() public breakpointsEvents = new EventEmitter();
  @Output() public ReloadiFrameForVA = new EventEmitter();
  public desktop:string ="../assets/images/desktop_active.png";
  public portriat:string ="../assets/images/portrait_inactive.png";
  public landscape:string ="../assets/images/landscape_inactive.png";
  public mobile:string ="../assets/images/mobile_inactive.png";
  constructor() { }

  ngOnInit() {
  }

changeToDesktop() {
  this.breakpointsEvents.emit('100%');
  this.desktop ="../assets/images/desktop_active.png";
  this.portriat ="../assets/images/portrait_inactive.png";
  this.landscape ="../assets/images/landscape_inactive.png";
  this.mobile ="../assets/images/mobile_inactive.png";
  
}
changeToTabletPortriat() {
  this.breakpointsEvents.emit('768px')
  this.desktop ="../assets/images/desktop_inactive.png";
  this.portriat ="../assets/images/portrait_active.png";
  this.landscape ="../assets/images/landscape_inactive.png";
  this.mobile ="../assets/images/mobile_inactive.png";
}
changeToTabletLandscape() {
  this.breakpointsEvents.emit('1024px');
  this.desktop ="../assets/images/desktop_inactive.png";
  this.portriat ="../assets/images/portrait_inactive.png";
  this.landscape ="../assets/images/landscape_active.png";
  this.mobile ="../assets/images/mobile_inactive.png";
}
changeToMobile() {
  this.breakpointsEvents.emit('375px');
  this.desktop ="../assets/images/desktop_inactive.png";
  this.portriat ="../assets/images/portrait_inactive.png";
  this.landscape ="../assets/images/landscape_inactive.png";
  this.mobile ="../assets/images/mobile_active.png";
}
reloadiFrameforVA(){
  this.ReloadiFrameForVA.emit({source:"VA",event:"reloadiFrame",data:{url:"https://www.fiat.it/offerte",breakpoint:"100%"}});
}

}
