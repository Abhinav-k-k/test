function economicalBowlers(matches,deliveries) {
    const arr=[];
    const result = {};
    for (let match of matches){
      if (match.season==2015){
        arr.push(match.id)
      }
    }
    for (let delivery of deliveries){
        if(arr.includes(delivery.match_id)){
            const bowler=delivery.bowler;
            if(result[bowler]) {
                result[bowler][0]+=Number(delivery.total_runs);
                result[bowler][1]+=Number(1);
            } else {
                const i=1;
                result[bowler]=[Number(delivery.total_runs),Number(i)];
            }
        }
    }
    for (let i in result){
        result[i]=Number(result[i][0]/(result[i][1]/6));
    }
    const arr_result=[];
    for(let i in result){
        arr_result.push([i,result[i]])
    }
    arr_result.sort(function(a, b) {
        var x = a[1];
        var y = b[1];
        return x - y;
    });
    const new_arr_result=arr_result.slice(0,10);
    const new_result={}
    for(let i of new_arr_result){
        new_result[i[0]]=i[1];
    }
    return new_result;
  }
  
  module.exports = economicalBowlers;
  