import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Shelf } from '../../../types/shelf';

@Component({
    selector: 'summary-dialog',
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
    templateUrl: './summary-dialog.component.html',
    styleUrl: './summary-dialog.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class SummaryDialogComponent{
    @Input() shelf: Shelf = {} as Shelf;
  }
