import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberLeak = new EventEmitter<number>();

  counter = 1;
  interval;

  spillNumbers(): void {
    this.interval = setInterval(() => {
        this.numberLeak.emit(this.counter);
        this.counter++;
      }, 1000);
  }

  onStartGame(): void {
    this.spillNumbers();
  }

  onStopGame(): void {
    clearInterval(this.interval);
  }

  delay(ms: number): any {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  constructor() { }

  ngOnInit(): void {
  }

}
