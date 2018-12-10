import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  dataSetArrForRPA: Array<any> = [] ;
  dataSetArrForDOM: Array<any> = [] ;
  ticket:Array<object>;
  metaDataFromIframe:any;
  constructor() { }

  checkTypeOf(data:any)
  {
    return JSON.stringify(typeof data);
  }
  searchInDatasetArr(val1 , myArray){
	
    for (var i=0; i < myArray.length ; i++) {
        if (myArray[i].p2cresource == val1) {
            return i;
        }
    }
  }
}
