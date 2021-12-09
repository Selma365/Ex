const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field=[[]]){
    this.field=field;
    this.locationX=0;
    this.locationY=0;
    this.field[0][0] = pathCharacter;
  }
  print(){
    const ondisplay=this.field.map(row =>{return row.join('');}).join('\n');
    console.log(ondisplay);
  }

  question(){
    const answer= prompt('Which way?');
    switch(answer){
      case 'U': this.locationY+=1; break;
      case 'D': this.locationY-=1; break;
      case 'L': this.locationX-=1; break;
      case 'R': this.locationX+=1; break;
    default: console.log('You need to enter U D L or R!');
    this.question();
    break;
  }
  }

  run(){
    let play=true;
    while(play){
      this.print();
      this.question();
    }
  }

  static generateField(height,width,percentage=0.1){
    
  }
  
}
