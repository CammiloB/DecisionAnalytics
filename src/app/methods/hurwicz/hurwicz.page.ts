import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hurwicz',
  templateUrl: './hurwicz.page.html',
  styleUrls: ['./hurwicz.page.scss'],
})
export class HurwiczPage implements OnInit {

  public alternatives = [];
  public natureStates = [];
  public nameAlternative: string;
  public nameNatureState: string;
  public paymentMatrix = [];
  public matrix = [];
  public resultFlag = false;
  public result = 0;
  public index = 0;
  public alpha = 0.7;

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
    
    var highers = [];
    var smallers = [];
    var results = [];
    this.convertMatrix();
    for(var _i=0; _i<this.matrix.length; _i++){
      highers.push(this.higherList(this.matrix[_i]));
      smallers.push(this.smallerList(this.matrix[_i]));
    }
    for(var _i=0; _i<highers.length; _i++){
      results.push(this.alpha*highers[_i] + (1-this.alpha)*smallers[_i])
    }

    for(var _i = 0; _i<results.length; _i++){
      if(this.result < results[_i]){
        this.result = results[_i];
        this.index = _i;
      }
    }
    this.resultFlag = true;
  }

  convertMatrix(){
    for(var _i = 0; _i<this.matrix.length; _i++){
      for(var _j=0; _j<this.matrix[_i].length; _j++){
        this.matrix[_i][_j]=parseFloat(this.matrix[_i][_j]);
      }
    }
  }

  higherList(array: any[]){
    var high = 0;
    for(var _i=0; _i<array.length; _i++){
      if(array[_i] > high){
        high = array[_i];
      }
    }
    return high;
  }

  smallerList(array: any[]){
    var small = array[0];
    for(var _i=0; _i<array.length; _i++){
      if(array[_i] < small){
        small = array[_i];
      }
    }
    return small;
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