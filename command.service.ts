import { Injectable } from '@angular/core';
import { Icommand } from '../app.model';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor() { }
  addtext(command:Icommand){
    console.log('addtext+++++++++++++++++++');
    command.exec();  
  }
  deltext(command:Icommand){
    console.log('delete text+++++++++++++++');
    command.exec();
  }
  undoAction(command:Icommand){
    console.log('undo action');
    command.exec();
  }
}
