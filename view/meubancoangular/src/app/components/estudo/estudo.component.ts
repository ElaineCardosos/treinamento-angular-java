import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-estudo',
  templateUrl: './estudo.component.html',
  styleUrls: ['./estudo.component.css']
})
export class EstudoComponent implements OnInit {

  @Input()
  exibindo: boolean = false;

  @Input()
  exibirTextoAlerta: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
