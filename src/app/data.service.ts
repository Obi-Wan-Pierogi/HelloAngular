import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseURL: string = 'https://localhost:3000/api';

  constructor(private http: HttpClient) { }

  //get all
  
  //get one by id

  //create new

  //update existing by id

  //delete by id
}
