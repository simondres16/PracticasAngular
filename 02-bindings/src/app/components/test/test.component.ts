import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  public div1:boolean = false;

  public div1Clase = {
    "div1-true" : this.div1,
    "div1-false" : !this.div1
  };

  public div2:boolean = false;

  public div2Clase = {
    "div2-true" : this.div2,
    "div2-false" : !this.div2
  };

  public div3:boolean = false;

  public div3Clase = {
    "div3-true" : this.div3,
    "div3-false" : !this.div3
  };

  public estilo = {
    color : "blue",
    "font-family" : "fantasy"
  };

  public texto:string = "";

  ngOnInit() {
  }

  saludo(evento){
    console.log(evento);
    this.texto = "Bienvenidos al Himalaya";
  }
  cambiarDiv1(){

      this.div1 = !this.div1;

      this.div1Clase = {
        "div1-true" : this.div1,
        "div1-false" : !this.div1
      };
  }

  cambiarDiv2(){
      this.div2 = !this.div2;

      this.div2Clase = {
        "div2-true" : this.div2,
        "div2-false" : !this.div2
      };
  }

  cambiarDiv3(){
      this.div3 = !this.div3;

      this.div3Clase = {
        "div3-true" : this.div3,
        "div3-false" : !this.div3
      };
  }
}
