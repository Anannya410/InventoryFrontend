import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DeviceShelfPositionRelation } from '../../types/deviceShelfPositionRelation';
import { RelationsService } from '../../services/relations/relations.service';
import { RouterLink } from '@angular/router';
import { ShelfShelfPositionRelation } from '../../types/shelfShelfPositionRelation';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-add-relationships',
  imports: [
    HeaderComponent,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './add-relationships.component.html',
  styleUrl: './add-relationships.component.css'
})
export class AddRelationshipsComponent {
  relation1 : DeviceShelfPositionRelation = {} as DeviceShelfPositionRelation
  relation2 : ShelfShelfPositionRelation = {} as ShelfShelfPositionRelation

  constructor(private relationsService: RelationsService) {}

  async onSubmitRelation1() {
    await this.relationsService.addDeviceToShelfPosition(this.relation1);
  }

  async onSubmitRelation2(){
    await this.relationsService.addShelftoShelfPosition(this.relation2);
  }
}
