import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  baseUrl = "http://localhost:3000/api/v1/";

  constructor(private http: HttpClient) { }

  createLivre(data: any) {
     return this.http.post(`${this.baseUrl}livre`, data);
  }

  getLivre(){
    return this.http.get(`${this.baseUrl}livre`);
  }

  deleteLivre(id:any){
    return this.http.delete(`${this.baseUrl}livre/`+id);
  }

  getLivreById(id:any){
    return this.http.get(`${this.baseUrl}livre/`+id);
  }

  updateLivre(id:any,data:any){
    return this.http.put(`${this.baseUrl}livre/`+id,data);
  }
}

