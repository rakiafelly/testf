import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3000/api/v1/";

  constructor(private http: HttpClient) { }

  createclient(data: any) {
     return this.http.post(`${this.baseUrl}client`, data);
  }

  getclient(){
    return this.http.get(`${this.baseUrl}client`);
  }

  deleteclient(id:any){
    return this.http.delete(`${this.baseUrl}client/`+id);
  }

  getclientById(id:any){
    return this.http.get(`${this.baseUrl}client/`+id);
  }

  updateclient(id:any,data:any){
    return this.http.put(`${this.baseUrl}client/`+id,data);
  }
}


