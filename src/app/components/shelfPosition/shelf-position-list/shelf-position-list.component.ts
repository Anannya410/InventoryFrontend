import { Component, Input, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelfPosition } from '../../../types/shelfPosition';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShelfPositionDataService } from '../../../services/shelfPosition/shelf-position-data.service';

@Component({
  selector: 'app-shelf-position-list',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './shelf-position-list.component.html',
  styleUrl: './shelf-position-list.component.css'
})
export class ShelfPositionListComponent {
  readonly panelOpenState = signal(false);

  isEditable = false;

  @Input() shelfPosition = {} as ShelfPosition

  constructor(private shelfPositionDataService : ShelfPositionDataService){}

  toggleUpdate(){
    this.isEditable = true;
  }

  async updateShelfPosition(){
    this.isEditable = false;
    await this.shelfPositionDataService.updateShelfPosition(this.shelfPosition);
  }

  async deleteShelfPosition(){
    await this.shelfPositionDataService.deleteShelfPosition(this.shelfPosition.id);
  }
}
