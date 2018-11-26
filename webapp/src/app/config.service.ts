import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  dataSetArr: Array<any> = [] ;
  constructor() { }
}
