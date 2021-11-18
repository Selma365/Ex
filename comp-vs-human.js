function generateTarget(){
  return random=Math.floor(Math.random()*8);
}

function compareGuesses(userguess, compguess, target){
  target=generateTarget();
  const user=Math.abs(target-userguess);
  const comp=Math.abs(target-compguess);
  if(user < comp ){
    return updateScore('human');
  }else{
    return updateScore('comp');
  }
}

const updateScore= winner =>{
  if(winner==='human'){
    humanScore+=1;
  }else if(winner==='comp'){
    computerScore+=1;
  }
}

function advanceRound(){
  currentRoundNumber+=1;
}