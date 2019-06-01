import {Injectable} from '@angular/core';
import {Icommand} from '../app.model';
export class DeleteCommand implements Icommand{
    textArray:string[];
    index:number;
    constructor(index:number,textArray:string[]){
        this.index = index;
        this.textArray = textArray;
    }
    exec(){
        console.log('delete-->');
        this.textArray.splice(this.index,1)
    }
}