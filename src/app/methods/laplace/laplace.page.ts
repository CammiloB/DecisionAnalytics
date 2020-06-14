import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laplace',
  templateUrl: './laplace.page.html',
  styleUrls: ['./laplace.page.scss'],
})
export class LaplacePage implements OnInit {

  public alternatives = [];
  public natureStates = [];
  public nameAlternative: string;
  public nameNatureState: string;
  public paymentMatrix = [];
  public matrix = [];
  public resultFlag = false;
  public result = 0;
  public index = 0;

  constructor() { }

  ngOnInit() {
  }

  addAlternative(){
    this.alternatives.push(this.nameAlternative);
    this.nameAlternative = "";
    this.initialiceMatrix()
  }

  addNatureState(){
    this.natureStates.push(this.nameNatureState);
    this.nameNatureState = "";
    this.initialiceMatrix();
  }

  initialiceMatrix(){
    this.matrix = [];
    for (var _i = 0; _i < this.alternatives.length; _i++) {
      this.matrix.push([])
      for (var _j = 0; _j < this.natureStates.length; _j++) {
        this.matrix[_i].push("")
      }
    }
  }

  calculateResult(){
    var smallers = []
    for(var _i=0; _i<this.matrix.length; _i++){
      smallers.push(this.smallerList(this.matrix[_i]));
    }
    
    this.result = smallers[0];
    for(var _i=0; _i<smallers.length; _i++){
      if(this.result < smallers[_i]){
        this.result = smallers[_i];
        this.index = _i;
      }
    }
    this.resultFlag = true;
  }

  smallerList(array: any[]){

    var value = array.length;
    var result = 0;

    for(var _i=0; _i<array.length; _i++){
      result += array[_i]*value;
    }
    return result;
  }

  refresh(){
    this.natureStates = [];
    this.alternatives = [];
    this.nameAlternative = "";
    this.nameNatureState = "";
    this.paymentMatrix = [];
    this.matrix = [];
    this.resultFlag = false;
    this.result = 0;
    this.index = 0;
  }

}
