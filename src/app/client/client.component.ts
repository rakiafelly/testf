import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientForm?: FormGroup
  clients: any
   clientId:any
  submitted=false
  searchText:any
  search:any
  constructor( private clientService: ClientService) { }


  ngOnInit(): void {

    this.clientForm = new FormGroup({
      nom: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
  
    })
this.getAllclients();
  }

  addclient() {
    this.submitted=true;
    if (this.clientForm?.invalid) {
      return;
    }
    this.clientService.createclient(this.clientForm?.value).subscribe((response: any) => {
 console.log(response);
      //  this.toastr.success('Tag is created successfully','Success')
      location.reload();
    }, (error: any) => {
      console.log(error);
      
      //  this.toastr.error('Tag already exist','Exist');
    }
    )
  }
  getAllclients() {
    this.clientService.getclient().subscribe((response: any) => {
      this.clients = response;
    }, (error: any) => { console.log(error) });
  }

  delete(id:any){
    this.clientService.deleteclient(id).subscribe((response:any)=>{
      this.getAllclients();
      //  this.toastr.info('client is deleted successffuly','Deleted')
    },(error:any)=>{console.log(error)});
  }

showData(id:number){
 this.clientId=id;
  this.clientService.getclientById(id).subscribe((response:any)=>{
    this.clientForm?.patchValue(response);
  },(error:any)=>{console.log(error)});
}
  update(){
    this.submitted=true;
    if (this.clientForm?.invalid) {
      return;
    }
    this.clientService.updateclient(this.clientId,this.clientForm?.value)?.subscribe((response:any)=>{
      //  this.toastr.success('client is updated successfully','Updated' )
      location.reload();
    },(error:any)=>{console.log(error)});
    
  }

}

