  import { Component, OnInit } from '@angular/core';
import {FreeapiService} from 'src/app/services/freeapi.service'
import {IProperties} from 'src/app/services/properties'
@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {
  sharebtn:any
  share:boolean = true;

  properties:IProperties[]= [];

 
  constructor(private _freeapi:FreeapiService) { }
 
  ngOnInit(): void {
    this.propertiesdata();
  }
  propertiesdata(){
    this._freeapi.get().subscribe(
      data => {
         this.properties = data;
      console.log(data)
    }
    )
  }

}
