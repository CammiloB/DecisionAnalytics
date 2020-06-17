import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-savage',
  templateUrl: './savage.page.html',
  styleUrls: ['./savage.page.scss'],
})
export class SavagePage implements OnInit {

  public alternatives = [];
  public natureStates = [];
  public nameAlternative: string;
  public nameNatureState: string;
  public paymentMatrix = [];
  public matrix = [];elmillor
  public resultFlag = false;
  public result = 0;
  public index = 0;
  public maxs = [];

  constructor(
    public toastController: ToastController) { }

  ngOnInit() {
    this.viewToastInit();
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
    
    //this.convertMatrix();
    for(var _i=0; _i<this.matrix[0].length; _i++){
      var max = 0;
      for(var _j=0; _j<this.matrix.length; _j++){
        if(this.matrix[_j][_i] > max){
          max = this.matrix[_j][_i];
        }
      }
      highers.push(max)
    }
    for(var _i=0; _i<this.matrix[0].length; _i++){
      for(var _j=0; _j<this.matrix.length; _j++){
        this.matrix[_j][_i] = highers[_i]-this.matrix[_j][_i];
      }
    }

    for(var _i=0; _i<this.matrix.length; _i++){
      this.maxs.push(this.higherList(this.matrix[_i]));
    }
    this.result = this.maxs[0];
    for(var _i=0; _i<this.maxs.length; _i++){
      if(this.result > this.maxs[_i]){
        this.result = this.maxs[_i];
        this.index = _i;
      }
    }
    this.resultFlag = true
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
      if(isNaN(parseFloat(array[_i]))){
        this.viewToast();
        throw new Error(
          'Se ha ingresado un dato incorrecto.'
        )
      }
      if(array[_i] > high){
        high = array[_i];
      }
    }
    return high;
  }

  async viewToast(){
    const toast = await this.toastController.create({
      message: 'Has ingresado un dato incorrecto!',
      duration: 3000
    });
    toast.present();
  }

  async viewToastInit(){
    const toast = await this.toastController.create({
      message: 'Los datos decimales son referenciados con punto "."',
      duration: 1000
    });
    toast.present();
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
