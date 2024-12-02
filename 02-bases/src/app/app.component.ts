import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public myAge: number = 23;
  public counter: number = 10;

  public increaseBy(value: number):void{
    this.counter += value
  };


  public resetBy():void{
    this.counter = 10;
  }
}
