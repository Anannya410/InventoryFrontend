import {ChangeDetectionStrategy, Component, Inject, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Shelf } from '../../../types/shelf';
import { ShelfPosition } from '../../../types/shelfPosition';

@Component({
    selector: 'summary-dialog',
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
    templateUrl: './summary-dialog.component.html',
    styleUrl: './summary-dialog.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SummaryDialogComponent{
    isShelfSelected = false;
    isShelfPositionSelected = false;
    isDeviceSelected = false;
    color= '#c990c0';

    constructor(@Inject(MAT_DIALOG_DATA) public shelf: Shelf) {}

    selectShelf(){
      this.isShelfSelected = !this.isShelfSelected;
      this.isShelfPositionSelected = false;
      this.isDeviceSelected = false;
    }

    selectShelfPostion(){
      this.isShelfSelected = false;
      this.isShelfPositionSelected = !this.isShelfPositionSelected;
      this.isDeviceSelected = false;
    }

    selectDevice(){
      this.isShelfSelected = false;
      this.isShelfPositionSelected = false;
      this.isDeviceSelected = !this.isDeviceSelected;
    }
  }
