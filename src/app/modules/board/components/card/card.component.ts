import { Component, Input, OnInit } from '@angular/core';
import { BoardList } from '../../models/list';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input('card')
  public boardList!: BoardList

  constructor() { }

  ngOnInit(): void {
  }

}
