import {
  Component,
  ChangeDetectionStrategy,
  signal,
  OnInit,
} from '@angular/core';
import { CommonModule, formatPercent } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { DeviceService } from '../../services/device.service';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  readonly panelOpenState = signal(false);

  devices: any[] = [];
  isEditable=false
  editableDeviceID = -1;

  constructor(private deviceService: DeviceService) {}

  async ngOnInit() {
    await this.deviceService.getDevices();
    this.deviceService.devices.subscribe((data) => {
      this.devices = data;
    });
    console.log(this.devices);
  }

  toggleUpdate(id: number){
    this.isEditable = true
    this.editableDeviceID = id
  }

  async updateDevice(device: any){
    this.isEditable = false
    await this.deviceService.updateDevice(device);
  }

  async deleteDevice(id: number) {
    await this.deviceService.deleteDevice(id);
    console.log(this.devices);
  }
}
