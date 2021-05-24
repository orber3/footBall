import {MatchReader} from './MatchReader'
import {Summary} from './Summary'


// const csvFileREader = new CsvFileReader('football.csv')
// const matchReader = new MatchReader(csvFileREader)
const matchReader= MatchReader.fromCsvFile('football.csv')
matchReader.load()
const team ="Liverpool"

// const summary = new Summary (
//   new WinsAnalysis(team) , 
//   new HtmlReport(team)
// )

const summary = Summary.winsAnalysiswithHtmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches)
