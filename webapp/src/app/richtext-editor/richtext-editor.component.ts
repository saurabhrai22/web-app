import { Component, OnInit, Input, Output } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-richtext-editor',
  templateUrl: './richtext-editor.component.html',
  styleUrls: ['./richtext-editor.component.css']
})
export class RichtextEditorComponent implements OnInit {
  @Input('textvalue')  textValue:any;
  constructor() { }

  ngOnInit() {
    document.getElementById('p2cdatahtml').innerHTML = this.textValue;
        $('#p2cdatahtml').froalaEditor({
          enter: $.FroalaEditor.ENTER_BR,
          charCounterCount:false,
          colorsText: ['#000000', '#ffffff'],
          colorsBackground: ['none'],
          toolbarButtons: ['bold', 'italic', 'underline','|', 'subscript', 'superscript', 'specialCharacters', '|','color','my_dropdown','|','html','|','fullscreen'],
          toolbarButtonsXS: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
          toolbarButtonsSM: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
          toolbarButtonsMD: ['bold', 'italic', 'underline', 'subscript', 'superscript', 'specialCharacters', 'paragraphFormat','html','fullscreen'],
          });
  }

}
