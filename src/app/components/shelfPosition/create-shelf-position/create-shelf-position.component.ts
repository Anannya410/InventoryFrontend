import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ShelfPosition } from '../../../types/shelfPosition';
import { ShelfPositionDataService } from '../../../services/shelfPosition/shelf-position-data.service';

@Component({
  selector: 'app-create-shelf-position',
  imports: [
    RouterModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './create-shelf-position.component.html',
  styleUrl: './create-shelf-position.component.css'
})
export class CreateShelfPositionComponent {
  shelfPosition: ShelfPosition = {} as ShelfPosition

  constructor(private shelfPositionDataService: ShelfPositionDataService) {}

  async onSubmit(){
    await this.shelfPositionDataService.saveShelfPosition(this.shelfPosition)
  }
}
