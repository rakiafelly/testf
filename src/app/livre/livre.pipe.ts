import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'livre'
})
export class LivrePipe implements PipeTransform {
transform(array: any[], searchText: any):any {
  if(searchText){
  return array.filter((x: any) =>
    x.titre.toLowerCase().includes(searchText)
  )
}
  
   else{
return array;

}

}
}
