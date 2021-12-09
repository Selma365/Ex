const Calculate = {
  factorial(value){
    if(value<=1){return 1;}
  
     for(let i=value-1;i>0;i--){
       value=value*i;
     }
     return value;
    }
  }

module.exports = Calculate;


