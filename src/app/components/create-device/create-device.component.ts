import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { DeviceDataService } from '../../services/device.service';

@Component({
  selector: 'app-create-device',
  imports: [
    RouterModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './create-device.component.html',
  styleUrl: './create-device.component.css',
  standalone: true,
})
export class CreateDeviceComponent {
  device = {
    id: null,
    name: '',
    deviceType: '',
  };

  constructor(private deviceService: DeviceDataService) {} //Dependemcy Injection

  async onSubmit() {
    await this.deviceService.saveDevice(this.device);
  }
}
