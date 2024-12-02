import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
    <h2>{{counter}}</h2>

    <button (click)="increaseBy(1)">+</button>
    <button (click)="increaseBy(-1)">-</button>
    <button (click)="resetBy()">Reset</button>
    `
})

export class CounterComponent{
    public counter: number = 10;
  
    public increaseBy(value: number):void{
      this.counter += value
    };
  
  
    public resetBy():void{
      this.counter = 10;
    }
}