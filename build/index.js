"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
// const csvFileREader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileREader)
var matchReader = MatchReader_1.MatchReader.fromCsvFile('football.csv');
matchReader.load();
var team = "Liverpool";
// const summary = new Summary (
//   new WinsAnalysis(team) , 
//   new HtmlReport(team)
// )
var summary = Summary_1.Summary.winsAnalysiswithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
