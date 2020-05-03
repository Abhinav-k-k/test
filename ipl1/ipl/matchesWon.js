function matchesWon(matches) {
    const result = {};
    for (let match of matches) {
        if(result[match.season]){
            if(result[match.season][match.winner]){
                result[match.season][match.winner]+=1  
            }else{
                result[match.season][match.winner]=1 
            }
        }else{
            result[match.season]={}
        }
    }
    return result;
  }
  
  module.exports = matchesWon;