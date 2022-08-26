import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { BoardList } from '../../models/list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isShowingListNameInput = false;

  public listNameControl = new FormControl('', Validators.required);

  private _boardList = new BehaviorSubject<Array<BoardList>>([]);

  public boardList$ = this._boardList.asObservable();

  constructor(private _dialog: MatDialog, private _snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  public toggleNewListNameInput() {
    this.isShowingListNameInput = true;
  }

  public toggleListNameInputControl() {
    this.isShowingListNameInput = false;
  }

  public createNewList() {

    if (this.listNameControl.invalid) {
      this._snackbar.open("Enter a list name", 'close', { duration: 3000, horizontalPosition: 'right' });
      return;
    }

    const list = new BoardList(this.listNameControl.value as string);

    this._boardList.next([ ...this._boardList.value, list ]);

    this.listNameControl.reset();

    this.toggleListNameInputControl();

  }

}
