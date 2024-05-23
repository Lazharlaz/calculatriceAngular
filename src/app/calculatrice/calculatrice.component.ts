import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {

  nombre1 : number = 0;
  nombre2 : number = 0;
  total : number = 0;
 


  generateNumber():void{
    this.nombre1 = this.getRandomInt();
    this.nombre2 = this.getRandomInt();
  }

  getRandomInt():number {
    return Math.floor(Math.random() * 1000);
  }

calculer(operateur:string):void{
console.log(eval(this.nombre1 + operateur + this.nombre2))
this.total = eval(this.nombre1 + operateur + this.nombre2)

  }
}
