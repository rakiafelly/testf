import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LivreService } from './livre.service';



@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  livreForm?: FormGroup
  livres: any
   livreId:any
  submitted=false
  searchText:any
  search:any
  constructor( private livreService: LivreService) { }


  ngOnInit(): void {

    this.livreForm = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      auteur: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      contenu: new FormControl('', [Validators.required])
    })
this.getAllLivres();
  }

  addLivre() {
    this.submitted=true;
    if (this.livreForm?.invalid) {
      return;
    }
    this.livreService.createLivre(this.livreForm?.value).subscribe((response: any) => {
 console.log(response);
      //  this.toastr.success('Tag is created successfully','Success')
      // location.reload();
    }, (error: any) => {
      console.log(error);
      
      //  this.toastr.error('Tag already exist','Exist');
    }
    )
  }
  getAllLivres() {
    this.livreService.getLivre().subscribe((response: any) => {
      this.livres = response;
    }, (error: any) => { console.log(error) });
  }

  delete(id:any){
    this.livreService.deleteLivre(id).subscribe((response:any)=>{
      this.getAllLivres();
      //  this.toastr.info('Livre is deleted successffuly','Deleted')
    },(error:any)=>{console.log(error)});
  }

showData(id:number){
 this.livreId=id;
  this.livreService.getLivreById(id).subscribe((response:any)=>{
    this.livreForm?.patchValue(response);
  },(error:any)=>{console.log(error)});
}
  update(){
    this.submitted=true;
    if (this.livreForm?.invalid) {
      return;
    }
    this.livreService.updateLivre(this.livreId,this.livreForm?.value)?.subscribe((response:any)=>{
      //  this.toastr.success('Livre is updated successfully','Updated' )
      location.reload();
    },(error:any)=>{console.log(error)});
    
  }

}

