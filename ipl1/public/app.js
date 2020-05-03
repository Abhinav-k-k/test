function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizematchesWon(data.matchesWon);
  visualize_extraRuns(data.extraRuns);
  visualize_economicalBowlers(data.economicalBowlers);
  visualize_topBatesMan(data.topBatesMan);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}
// -----------------------------------------------------------------------------------------------------------------
function visualizematchesWon(matchesWon) {
  const seriesData = [];
  const arr=[];
  const arr1=[];
  const arr2=[];
  const obj={};
  for (let year in matchesWon) {
    seriesData.push(year);
  }
  // console.log(seriesData)
  for (let year in matchesWon){
      for (let team in matchesWon[year]){
          if (team==""){
              arr.push("No Result");
          }else{
              arr.push(team);
          }
      }
  }
  for (var i of arr){
      if(arr1.indexOf(i)===-1){
          arr1.push(i);
      }
  }
  // console.log(arr1);
  for (let team of arr1){
      for (let year in matchesWon){
          if(obj[team]){
              if (matchesWon[year][team]==null){
                  obj[team].push(0)
              }else{
                  obj[team].push(matchesWon[year][team])
              }
          }else{
              if (matchesWon[year][team]==null){
                  obj[team]=[0];
              }else{
                  obj[team]=[matchesWon[year][team]];
              }
          }
      }
  }
  // console.log(obj);
  
  for (let team in obj){
      obj_temp={name:team,data:obj[team]};
      arr2.push(obj_temp);
  }
  // console.log(arr2);

  Highcharts.chart("matches-won", {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Number Of Matches Won Per Team'
      },
      subtitle: {
          text: 'Source:ipl Dataset'
      },
      xAxis: {
          categories:seriesData,
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'No.of Matches'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series:arr2
  });
}

// --------------------------------------------------------------------------------------------------------------------
function visualize_extraRuns(extraRuns) {
  const seriesData = [];
  for (let team in extraRuns) {
    seriesData.push([team, extraRuns[team]]);
  }

  Highcharts.chart('extra-runs', {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra runs conceded by each team"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: { 
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Runs"
      }
    },
    series: [
      {
        name: "Team",
        data: seriesData
      }
    ]
  });
}
// ---------------------------------------------------------------------------------------------------------------------------------------
function visualize_economicalBowlers(economicalBowlers) {
  const seriesData = [];
  for (let name in economicalBowlers) {
    seriesData.push([name, economicalBowlers[name]]);
  }

  Highcharts.chart("economical_bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "Economical bowlers in 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: { 
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economi"
      }
    },
    series: [
      {
        name: "Bowler",
        data: seriesData
      }
    ]
  });
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------
function visualize_topBatesMan(topBatesMan) {
  const seriesData = [];
  for (let name in topBatesMan) {
    seriesData.push([name, topBatesMan[name]]);
  }

  Highcharts.chart("Top-bates-man", {
    chart: {
      type: "column"
    },
    title: {
      text: "Top 10 Bates Mans in 2017"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Runs"
      }
    },
    series: [
      {
        name: "Name",
        data: seriesData
      }
    ]
  });
}

