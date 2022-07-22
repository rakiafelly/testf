import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

baseUrl = "http://localhost:3000/api/v1/";

constructor(private http: HttpClient) { }

createCategory(data: any) {
   return this.http.post(`${this.baseUrl}category`, data);
}

getCategory(){
  return this.http.get(`${this.baseUrl}category`);
}

deleteCategory(id:any){
  return this.http.delete(`${this.baseUrl}category/`+id);
}

getCategoryById(id:any){
  return this.http.get(`${this.baseUrl}category/`+id);
}

updateCategory(id:any,data:any){
  return this.http.put(`${this.baseUrl}category/`+id,data);
}

getLivre(){
  return this.http.get(`${this.baseUrl}allLivres`);
}

}

