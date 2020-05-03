const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWon = require("./ipl/matchesWon");
const extraRuns=require("./ipl/extraRuns");
const economicalBowlers = require("./ipl/economicalBowlers");
const topBatesMan = require("./ipl/topBatesMan");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH="./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      // console.log(matchesPlayedPerYear(matches));
      let result = matchesPlayedPerYear(matches);
      saveMatchesPlayedPerYear(result);
    });

    csv()
.fromFile(MATCHES_FILE_PATH)
.then(matches => {
    // console.log(matchesWon(matches));
  let result = matchesWon(matches);
  saveData(result);
});

csv()
.fromFile(MATCHES_FILE_PATH)
.then(matches => {
  csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      // console.log(extraRuns(matches,deliveries));
      let result = extraRuns(matches,deliveries);
      save_extraRuns(result);
    });
});
csv()
.fromFile(MATCHES_FILE_PATH)
.then(matches => {
  csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      // console.log(economicalBowlers(matches,deliveries));
      let result = economicalBowlers(matches,deliveries);
      saveeconomicalBowlers(result);
    });
});
csv()
.fromFile(MATCHES_FILE_PATH)
.then(matches => {
  csv()
    .fromFile(DELIVERIES_FILE_PATH)
    .then(deliveries => {
      // console.log(topBatesMan(deliveries,matches));
      let result = topBatesMan(deliveries,matches);
      savetopBatesMan(result);
    });
});
}
var jsonData={};
function saveMatchesPlayedPerYear(result) {
  jsonData.matchesPlayedPerYear = result
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}


function saveData(result) {
  jsonData.matchesWon = result
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

function save_extraRuns(result) {
  jsonData.extraRuns=result;

  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

function saveeconomicalBowlers(result) {
  jsonData.economicalBowlers=result;
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}
function savetopBatesMan(result) {
  jsonData.topBatesMan=result
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();
