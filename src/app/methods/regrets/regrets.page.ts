import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-regrets',
  templateUrl: './regrets.page.html',
  styleUrls: ['./regrets.page.scss'],
})
export class RegretsPage implements OnInit {

  public alternatives = [];
  public natureStates = [];
  public nameAlternative: string;
  public nameNatureState: string;
  public paymentMatrix = [];
  public matrix = [];
  public resultFlag = false;
  public result = 0;
  public index = 0;
  public highers = [];

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
    
    //this.convertMatrix();
    for(var _i=0; _i<this.matrix.length; _i++){
      this.highers.push(this.higherList(this.matrix[_i]));
    }
    this.result = this.highers[0];
    for(var _i=0; _i<this.highers.length; _i++){
      if(this.highers[_i] < this.result ){
        this.result = this.highers[_i];
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