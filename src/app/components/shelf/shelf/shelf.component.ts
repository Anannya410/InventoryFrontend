import { Component, OnInit } from '@angular/core';
import { ShelfDataService } from '../../../services/shelf/shelf-data.service';
import { Shelf } from '../../../types/shelf';
import { HeaderComponent } from '../../header/header.component';
import { ShelfListComponent } from '../shelf-list/shelf-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-shelf',
  imports: [
    RouterModule, 
    HeaderComponent, 
    ShelfListComponent, 
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './shelf.component.html',
  styleUrl: './shelf.component.css',
})
export class ShelfComponent {
  shelves: Shelf[] = [];

  constructor(private shelfDataService: ShelfDataService) {}

  async ngOnInit() {
    await this.shelfDataService.getShelves();
    this.shelfDataService.shelves.subscribe((data) => {
      this.shelves = data;
    });
  }
}
