import { MatchData } from "./MatchData";
import {WinsAnalysis} from './Analyzers/WinsAnalysis'
import {HtmlReport } from './Reports/HtmlReport'



export interface Analyzer { 
  run(matches: MatchData[]): string ;



} 
export interface OutputTarget { 
print(report:string): void;


}

export class Summary { 

static winsAnalysiswithHtmlReport(team: string): Summary { 

return new Summary(
  new WinsAnalysis(team),
  new HtmlReport(team)
)

}


  constructor(
    public analyzer: Analyzer , 
    public outputTarget: OutputTarget) {}

buildAndPrintReport(matches: MatchData[]): void  {

const output = this.analyzer.run(matches)

this.outputTarget.print(output)

}
}
