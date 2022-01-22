import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { QuestionComponent } from '../question/question.component';

@Component({
  selector: 'app-board-square',
  templateUrl: './board-square.component.html',
  styleUrls: ['./board-square.component.css'],
})
export class BoardSquareComponent implements OnInit {
  @Input() color = 'lightgreen';
  constructor(public dialog: MatDialog) {}

  openDialog() {}

  ngOnInit() {}

  squareClickEvent() {
    this.dialog.open(QuestionComponent);
  }
}
