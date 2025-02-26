import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ShelfDataService } from '../../../services/shelf/shelf-data.service';
import { Shelf } from '../../../types/shelf';

@Component({
  selector: 'app-create-shelf',
  imports: [
    RouterModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './create-shelf.component.html',
  styleUrl: './create-shelf.component.css',
})
export class CreateShelfComponent {
  shelf : Shelf = {} as Shelf

  constructor(private shelfDataService: ShelfDataService) {}

  async onSubmit(){
    await this.shelfDataService.saveShelf(this.shelf)
  }

}
