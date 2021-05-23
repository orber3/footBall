import {MatchReader} from './MatchReader'
import {matchResults} from'./MatchResults'



const reader = new MatchReader('football.csv')
 reader.read()
let manUnitedWins = 0
console.log(reader.data[1])

for(let match of reader.data) { 

  if(match[1] === 'Man United' && match[5] === matchResults.HomeWin){ 
    manUnitedWins++
  } else if(match[2] === 'Man United' && match[5] === matchResults.AwayWin) { 
    manUnitedWins++
  }
}

console.log(`man united won ${    manUnitedWins} wins`)