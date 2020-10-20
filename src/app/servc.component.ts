import { MySrvc } from './servc.service';
import { Component } from '@angular/core';

@Component(
{
    selector:'dt5',
    template:`<h1>{{meth()}}</h1>
    <h1>
    <table border=5>
    <tr  *ngFor='let val of arr'>
    <td>
    {{val}}
    </td>
    </tr>
    </table>
    </h1>`
}
)

export class SvcComponent
{
    data_value="ABCDEF";
    meth=()=>{return this.data_value;}
    arr;
    constructor(srvc:MySrvc)    //dependancy injection
    {
        this.arr=srvc.myData();
    }
}