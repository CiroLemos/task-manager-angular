import { Component } from '@angular/core';

import { TokenService } from "./shared/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';

  public constructor(private tokenService: TokenService){
    this.tokenService.init({
      apiBase: 'https://taskmanager-api-cirolemos.herokuapp.com/',
      globalOptions: {
        headers: {
          'Content-Type': 'application/json', 
          'Accept': 'application/vnd.taskmanager.v2'
        }
      }
    })
  }
}