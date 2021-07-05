import { Component, OnInit } from '@angular/core';

import {IProperties} from 'src/app/services/properties'

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {

name:string=''

onsubmit(data:any){
  console.warn(data)
    }


  constructor() { }

  ngOnInit(): void {
  }

}
