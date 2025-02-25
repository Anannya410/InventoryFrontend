import { Component, Input, signal } from '@angular/core';
import { DeviceDataService } from '../../services/device.service';
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
  editableDeviceID = -1;

  @Input() device: Device = {} as Device

  constructor(private deviceDataService: DeviceDataService) {}

  toggleUpdate(id: number) {
    this.isEditable = true;
    this.editableDeviceID = id;
  }

  async updateDevice(device: Device) {
    this.isEditable = false;
    console.log("Updated:"+JSON.stringify(device))
    await this.deviceDataService.updateDevice(device);
  }

  async deleteDevice(id: number) {
    await this.deviceDataService.deleteDevice(id);
  }
}
