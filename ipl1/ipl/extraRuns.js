function extraRuns(matches,deliveries) {
    const arr=[];
    const result = {};
    for (let match of matches){
      if (match.season==2016){
        arr.push(match.id)
      }
    }
    for (let delivery of deliveries) {
      if(arr.includes(delivery.match_id)){
        const bowling_team=delivery.bowling_team;
        if(result[bowling_team]) {
          result[bowling_team]+=Number(delivery.extra_runs);
        } else {
          result[bowling_team]=Number(delivery.extra_runs);
        }
      }
    }
    return result;
  }
  
  module.exports = extraRuns;