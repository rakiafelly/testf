import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from './category.service';
// import { IOption } from 'ng-select';



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryForm?: FormGroup
  categories: any
   categoryId:any
  submitted=false
  searchText:any
  search:any
  // livres:Array<IOption> =[]


  
  constructor( private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      livres: new FormControl('')

    })
    // this.getAllLivres();
this.getAllCategories();
  }

  addCategory() {
    this.submitted=true;
    if (this.categoryForm?.invalid) {
      return;
    }
    this.categoryService.createCategory(this.categoryForm?.value).subscribe((response: any) => {
 console.log(response);
      location.reload();
    }, (error: any) => {
      console.log(error);
      
    }
    )
  }
  getAllCategories() {
    this.categoryService.getCategory().subscribe((response: any) => {
      this.categories = response;
    }, (error: any) => { console.log(error) });
  }

  delete(id:any){
    this.categoryService.deleteCategory(id).subscribe((response:any)=>{
      this.getAllCategories();
      //  this.toastr.info('Livre is deleted successffuly','Deleted')
    },(error:any)=>{console.log(error)});
  }

showData(id:number){
 this.categoryId=id;
  this.categoryService.getCategoryById(id).subscribe((response:any)=>{
    this.categoryForm?.patchValue(response);
  },(error:any)=>{console.log(error)});
}
  update(){
    this.submitted=true;
    if (this.categoryForm?.invalid) {
      return;
    }
    this.categoryService.updateCategory(this.categoryId,this.categoryForm?.value)?.subscribe((response:any)=>{
      //  this.toastr.success('Livre is updated successfully','Updated' )
      location.reload();
    },(error:any)=>{console.log(error)});
    
  }

  // getAllLivres(){
  //   this.categoryService.getLivre().subscribe((response:any)=>{
  //     this.livres=response;
    
      
  //   },(err)=>{
  //     console.log(err);
      
  //   })
  //  }

}


