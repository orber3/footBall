import  { Analyzer } from '../Summary'
import {MatchData} from '../MatchData'
import { matchResults } from '../MatchResults'

export class WinsAnalysis implements Analyzer { 
constructor(public teamName: string) { }

run(matches: MatchData[]): string { 


  let wins = 0

  for(let match of matches) { 
  
    if(match[1] === this.teamName && match[5] === matchResults.HomeWin){ 
      wins++
    } else if(match[2] === this.teamName && match[5] === matchResults.AwayWin) { 
      wins++
    }
  }
  return ( `team ${this.teamName} won ${wins} games`)

}

}