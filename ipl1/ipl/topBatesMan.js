function topBatesMan(deliveries,matches) {
    const arr=[];
    const result = {};
    for (let match of matches){
      if (match.season==2017){
        arr.push(match.id)
      }
    }
    for (let delivery of deliveries){
        if(arr.includes(delivery.match_id)){
            const batsman=delivery.batsman;
            if(result[batsman]) {
                result[batsman]+=Number(delivery.batsman_runs);
            } else {
                result[batsman]=Number(delivery.batsman_runs);
            }
        }
    }
    // return result;
    const arr_result=[];
    for(let i in result){
        arr_result.push([i,result[i]]);
    }
    // return arr_result;
    arr_result.sort(function(a, b) {
        var x = a[1];
        var y = b[1];
        return y - x;
    });
    // return arr_result
    const new_arr_result=arr_result.slice(0,10);
    const new_result={}
    for(let i of new_arr_result){
        new_result[i[0]]=i[1];
    }
    return new_result;
  }
  
  module.exports = topBatesMan;
  