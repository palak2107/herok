import{ Component } from '@angular/core';
import { fServ } from './servc.service';
@Component({
        selector:'sh',
        template:`<h1>Palak Gupta 11814659</h1>
        <div *ngFor='let a of arr'>
	    {{a}}
	  </div>`
    })

export class SComponent
{
    arr;
    constructor(srv:fServ)
    {
        this.arr=srv.myData();
    }
}

