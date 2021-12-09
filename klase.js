class Media{
  constructor(title){
    this._title=title;
    this._isCheckedOut=false;
    this._ratings = [];
  }
  get title(){return this._title;}
  get isCheckedOut(){return this._isCheckedOut;}
  get ratings(){return this._ratings;}
  
  set isCheckedOut(value){
    this._isCheckedOut=value;
  }

  toggleCheckOutStatus(value){
      if(value===true){this._isCheckedOut=false;}
      else{this._isCheckedOut=true;}
  }

  getAverageRating(){
    let sumvalue=this._ratings.reduce((accumulator,currentValue)=> accumulator+currentValue);
    let length=this.ratings.length;

    return sumvalue/length;
  }

  addRating(value){
    this._ratings.push(value);
  }
}

class Book extends Media{
  constructor(autor,title,pages){
      super(title); //samo sto parent koristi
      this._autor=autor;
      this._pages=pages;
  }
  get autor(){return this._autor;}
  get pages(){return this._pages;}
}

class Movie extends Media{
  constructor(director,title,runTime){
    super(title);
    this._director=director;
    this._runTime=runTime;
  }
  get director(){return this._director;}
  get runTime(){return this._runTime;}
}

const historyOfEverything=new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed= new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());