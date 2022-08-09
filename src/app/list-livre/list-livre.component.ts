import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListLivreService } from './list-livre.service';

@Component({
  selector: 'app-list-livre',
  templateUrl: './list-livre.component.html',
  styleUrls: ['./list-livre.component.css']
})
export class ListLivreComponent implements OnInit {
livres:any
client:any
constructor(private route:Router,private detailService:ListLivreService) { }

ngOnInit(): void {
this.detailService.getLivres().subscribe((response:any)=>{
this.livres=response
console.log(response);

},(error)=>console.log(error)
  )
}
getclient(){
  this.detailService.getclient().subscribe((response:any)=>{
    this.client=response
    console.log(response);
    
    },(error)=>console.log(error)
      )
}

}
