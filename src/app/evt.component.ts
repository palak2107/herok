import { Component } from '@angular/core';
import { Component } from '@angular/core';

@Component({
   selector:'evt',
   template:`<h3>Registration no:11814659<br>
        Name: Palak Gupta<br>
        Parent section:RDE844
        Roll no:A032</h3>
   <h2> Click on button</h2>
   <button (click)="myclick()">Click Here!
   </button>
   <input type="text" (keyUp.enter)="mydata($event.target.value)">`

})

export class EvtComponent{
i=0;
myclick=()=>{
	this.i++;
   console.log("button clicked times",this.i);
}
mydata=(val)=>{
    console.log("the value you enter is",val)
}
}