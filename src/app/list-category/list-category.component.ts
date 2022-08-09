import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListCategoryService } from './list-category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
categories:any
  constructor(private route:Router,private categoryService: ListCategoryService) { }

  ngOnInit(): void {
  this.categoryService.getCategories().subscribe((response:any)=>{
  this.categories=response
  console.log(response);
  
  },(error:any)=>console.log(error)
    )
  }
}