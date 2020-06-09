import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-optimist',
  templateUrl: './optimist.page.html',
  styleUrls: ['./optimist.page.scss'],
})
export class OptimistPage implements OnInit {

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
    var highers = []
    for(var _i=0; _i<this.matrix.length; _i++){
      highers.push(this.higherList(this.matrix[_i]));
    }
    for(var _i=0; _i<highers.length; _i++){
      if(this.result < highers[_i]){
        this.result = highers[_i];
        this.index = _i;
      }
    }
    this.resultFlag = true;
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
