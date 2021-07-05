import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor(private _httpclient: HttpClient) { }
  get():Observable<any>{
    return this._httpclient.get("http://localhost:3000/properties")
  }

  ngOnInIt(){

  }
}
