import { Component } from '@angular/core';

import { Exercice1Component } from './exercice1/exercice1.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  

  afficher(){
    console.log('clic');
  }
}
