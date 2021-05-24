import {OutputTarget} from '../Summary'
import fs from 'fs';

export class HtmlReport implements OutputTarget { 
  constructor(public teamName: string) { }

  print(report: string): void { 
    console.log(this.teamName)

    const html = `
    <div> 
    <h1> Analysis report

    </h1>
    <div> ${report} </div>

    </div>
    
    `;
    fs.writeFileSync(`${this.teamName}.html`,html)

  }

}