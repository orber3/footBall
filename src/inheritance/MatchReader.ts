import {CsvFileReader} from './CsvFileReader'
import {dateStringsToDate} from './utills'
import {matchResults} from'./MatchResults'
type MatchData = [Date , string , string , number,number, matchResults , string]

export class MatchReader extends CsvFileReader<MatchData> { 
  mapRow(row: string[]): MatchData { 
    return  [ 
      dateStringsToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as matchResults,
      row[6]
        ]   
  }




}