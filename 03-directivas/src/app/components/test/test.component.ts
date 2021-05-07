import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public color = true;

  public estilo = {
    color : "red"
  };

  public list = [
    {nombre:'Simon',apellido:'Munoz'},
    {nombre:'Brian',apellido:'Beltran'},
    {nombre:'Sebas',apellido:'Ortiz'},
    {nombre:'Darlyn',apellido:'Talia'},
    {nombre:'Jhonatan',apellido:'Diaz'},
    {nombre:'Jairo',apellido:'Pinilla'},
    {nombre:'Oscar',apellido:'Reyes'},
    {nombre:'Daniel',apellido:'Saavedra'},
    {nombre:'Johan',apellido:'Suarez'},
    {nombre:'Angie',apellido:'Martinez'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
