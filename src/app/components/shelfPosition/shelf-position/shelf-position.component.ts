import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { ShelfPositionListComponent } from '../shelf-position-list/shelf-position-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShelfPosition } from '../../../types/shelfPosition';
import { ShelfPositionDataService } from '../../../services/shelfPosition/shelf-position-data.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shelf-position',
  imports: [
    RouterModule, 
    HeaderComponent, 
    ShelfPositionListComponent, 
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './shelf-position.component.html',
  styleUrl: './shelf-position.component.css'
})
export class ShelfPositionComponent {
  shelfPositions: ShelfPosition[] = [];

  constructor(private shelfPositionDataService: ShelfPositionDataService) {}

  async ngOnInit() {
    await this.shelfPositionDataService.getShelfPositions();
    this.shelfPositionDataService.shelves.subscribe((data) => {
      this.shelfPositions = data;
    });
  }
}
