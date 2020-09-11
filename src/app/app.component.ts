import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  numArrays: number[] = [];

  onNumberReceived(num: number): void {
    console.log(num);
    this.numArrays.push(num);
  }

}
