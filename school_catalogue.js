class School{
  constructor(name,level,numberOfStudent){
    this._name=name;
    this._level=level;
    this._numberOfStudent=numberOfStudent;
  }

  get name(){return this._name;}
  get level(){return this._level;}
  get numberOfStudent(){return this._numberOfStudent;}
  
  set numberOfStudent(newNumberOfStudents){
    if(!newNumberOfStudents.isNaN()){
      this.numberOfStudent=newNumberOfStudents;
    }else{
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }

  quickFacts(){
    console.log(`${this._name} educates ${this._numberOfStudent} students at the ${this._level} level.`);
  }

  static pickSubstituteTeacher(substituteTeachers){
    let value= Math.floor(Math.random()*substituteTeachers.length);
    return substituteTeachers[value];
  }

}

class PrimarySchool extends School{
  constructor(name,numberOfStudent,pickupPolicy){
    super(name,'primary',numberOfStudent);
    this._pickupPolicy=pickupPolicy;
  }
  get pickupPolicy(){return this._pickupPolicy;}
}

class HighSchool extends School{
  constructor(name,numberOfStudent,sportsTeams){
    super(name,'high',numberOfStudent);
    this._sportsTeams=sportsTeams;
  }
  get sportsTeams(){return this._sportsTeams;}
}

let lorraineHansbury=new PrimarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();

const value=School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith=new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams);