import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private _httpclinet:HttpClient) { }
}
/*
postTrainerdata(trainerdata){
  return this._httpclinet.post("http://localhost:3000/trainers",JSON.stringify(trainerdata));
}
*/
