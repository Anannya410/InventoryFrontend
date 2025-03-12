import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shelf } from '../../../types/shelf';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShelfDataService } from '../../../services/shelf/shelf-data.service';

@Component({
  selector: 'app-shelf-list',
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
  templateUrl: './shelf-list.component.html',
  styleUrl: './shelf-list.component.css'
})
export class ShelfListComponent {
  readonly panelOpenState = signal(false);

  isEditable = false;

  @Input() shelf: Shelf = {} as Shelf;

  constructor(private shelfDataService: ShelfDataService){}

  toggleUpdate(){
    this.isEditable = true;

  }

  async updateShelf(){
    this.isEditable = false;
    await this.shelfDataService.updateShelf(this.shelf);
  }

  async deleteShelf(){
    await this.shelfDataService.deleteShelf(this.shelf.id);
  }
}
