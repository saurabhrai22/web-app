import { Component, OnInit, Pipe, PipeTransform, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { ConfigService } from '../config.service'
declare var $:any;

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform{
constructor(private DomSanitizer:DomSanitizer){ }
  transform(url)
  {
    return this.DomSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Component({
  selector: 'app-mainiframe',
  templateUrl: './mainiframe.component.html',
  styleUrls: ['./mainiframe.component.css']
})
export class MainiframeComponent implements OnInit {
  @Input('url') url;
  @Input('iframeSize') set changeIframeSize(iframeSize:any) {
    if(iframeSize != undefined)
    {
      var iframe = document.getElementById('main-iframe-id');
      iframe.style.width = iframeSize;
      $('#main-iframe-id').attr('src', $('#main-iframe-id').attr('src'));
     // this.url += '';
      //iframe += '';
    }
  }
  @Output() public sendJsonToHome = new EventEmitter();
  constructor(public config:ConfigService) { }

  ngOnInit() {
    
    window.addEventListener('message', (evt) => {
       /*if(this.config.checkTypeOf(evt.data).match('string')){
        if(evt.data.match('p2csettings'))
      {
        console.log('Retrived Message: ',JSON.parse(evt.data));
        this.sendJsonToHome.emit(JSON.parse(evt.data));
      } 
      }
    else*/ 
    if(this.config.checkTypeOf(evt.data).match('object')){
      if(Object.keys(evt.data).includes("source")){
        if(evt.data["source"] == "Iframe")
        {
          this.sendJsonToHome.emit(evt.data["data"]);
        }
        
      }

    }
   });
  }
}
