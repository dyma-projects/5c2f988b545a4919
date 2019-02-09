import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public url: string;
  public framework: string;
  constructor() { 
    this.url = 'https://angular.dyma.fr/';
  }

  ngOnInit() {
  }

  chargerFramework(){
    this.framework = 'Angular';
  }

}
