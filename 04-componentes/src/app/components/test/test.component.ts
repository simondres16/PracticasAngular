import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Input() titulo;
  @Output() evento = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }

  llamarEvento(){
    this.evento.emit('Hola papa ' + this.titulo);
  }


}
