import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  registre(data: any) {
    return this.http.post("http://localhost:3000/api/v1/registre", data)

  }
}
