import { Component, Input, signal } from '@angular/core';
import { DeviceDataService } from '../../services/device/device.service'; 
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Device } from '../../types/device';

@Component({
  selector: 'app-device-list',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './device-list.component.html',
  styleUrl: './device-list.component.css'
})
export class DeviceListComponent {
  readonly panelOpenState = signal(false);

  isEditable = false;

  @Input() device: Device = {} as Device

  constructor(private deviceDataService: DeviceDataService) {}

  toggleUpdate() {
    this.isEditable = true;
  }

  async updateDevice() {
    this.isEditable = false;
    await this.deviceDataService.updateDevice(this.device);
  }

  async deleteDevice() {
    await this.deviceDataService.deleteDevice(this.device.name);
  }
}
