import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }
  checkTypeOf(data:any)
  {
    return JSON.stringify(typeof data);
  }
}
