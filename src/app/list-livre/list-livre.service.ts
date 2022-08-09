import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListLivreService {

  baseUrl="http://localhost:3000/api/v1/";

  constructor(private http:HttpClient ) { }
  getLivres(){
    return this.http.get(`${this.baseUrl}livre`);
  }
  getlivreById(id:any){
    return this.http.get(`${this.baseUrl}livre/${id}`);
  }
  getclient(){
    return this.http.get(`${this.baseUrl}client`);
  }
}
