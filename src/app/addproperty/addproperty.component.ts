import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {IProperties} from 'src/app/services/properties'

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {

  constructor(private _httpclient:HttpClient) { }

//name:string='';
title:string='';
subtitle:string='';
url:string='';
description:string='';
//id:number='';
//id:number;


//postinterface:IProperties[] = []


// onsubmit(data:any){
//   console.warn(data)
//     }

onsubmit(data:any){
  this._httpclient.post("http://localhost:3000/properties", data).subscribe(
    res =>{
     console.log(res)
    }
  )
    }

 

  ngOnInit(): void {
  }

}
