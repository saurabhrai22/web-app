import { Injectable } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  dataSetArr: Array<any> = [] ;
  metaDataFromIframe:any;
  constructor() { }

  checkTypeOf(data:any)
  {
    return JSON.stringify(typeof data);
  }
}
