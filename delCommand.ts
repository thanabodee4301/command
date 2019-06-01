import { Injectable } from '@angular/core';
import {Icommand} from '../app.model';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

export class DelCommand implements Icommand{
    index:number;
    textArray:string[];
  constructor(index:number,textArray:string[]) {
      this.index = index; 
      this.textArray = textArray;
  }
    exec(){
        console.log('delete someText in array');
        this.textArray.splice(this.index,1);
    }
}
