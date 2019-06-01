import { Injectable } from '@angular/core';
import {Icommand} from '../app.model';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

export class AddCommand implements Icommand{
    sometext:string;
    textArray:string[];
  constructor(sometext:string,textArray:string[]) {
      this.sometext = sometext; 
      this.textArray = textArray;
  }
    exec(){
        console.log('sawaddddeeee');
        this.textArray.push(this.sometext);
    }
}
